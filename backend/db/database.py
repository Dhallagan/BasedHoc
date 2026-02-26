"""Database connection and utilities for BasedHoc (MotherDuck/DuckDB)."""

import os
import duckdb
from contextlib import contextmanager
from typing import Generator

from dotenv import load_dotenv

load_dotenv()

MOTHERDUCK_TOKEN = os.getenv("MOTHERDUCK_TOKEN", "")
MOTHERDUCK_DATABASE = os.getenv("MOTHERDUCK_DATABASE", "browserbase_demo")

# Schemas relevant to BrowserBase data
RELEVANT_SCHEMAS = ["bronze_supabase", "silver_core", "gold_marts", "gold_metrics"]


def get_connection() -> duckdb.DuckDBPyConnection:
    """Create a new MotherDuck connection."""
    conn_str = f"md:{MOTHERDUCK_DATABASE}?motherduck_token={MOTHERDUCK_TOKEN}"
    return duckdb.connect(conn_str)


@contextmanager
def get_db() -> Generator[duckdb.DuckDBPyConnection, None, None]:
    """Context manager for database connections."""
    conn = get_connection()
    try:
        yield conn
    finally:
        conn.close()


def test_connection() -> bool:
    """Test that the MotherDuck connection works."""
    with get_db() as conn:
        result = conn.execute("SELECT 1 AS ok").fetchone()
        return result is not None and result[0] == 1


def execute_sql(sql: str, params: tuple = ()) -> list[dict]:
    """Execute SQL and return results as list of dicts."""
    with get_db() as conn:
        cursor = conn.execute(sql, params if params else None)
        if cursor.description is None:
            return []
        columns = [desc[0] for desc in cursor.description]
        rows = cursor.fetchall()
        return [dict(zip(columns, row)) for row in rows]


def get_schema_info() -> dict:
    """Get database schema information from MotherDuck information_schema."""
    with get_db() as conn:
        schema_filter = ", ".join(f"'{s}'" for s in RELEVANT_SCHEMAS)
        query = f"""
            SELECT table_schema, table_name, column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_schema IN ({schema_filter})
            ORDER BY table_schema, table_name, ordinal_position
        """
        cursor = conn.execute(query)
        rows = cursor.fetchall()

        schema: dict = {}
        for row in rows:
            table_schema, table_name, column_name, data_type, is_nullable = row
            full_name = f"{table_schema}.{table_name}"
            if full_name not in schema:
                schema[full_name] = []
            schema[full_name].append({
                "name": column_name,
                "type": data_type,
                "nullable": is_nullable == "YES",
            })

        return schema
