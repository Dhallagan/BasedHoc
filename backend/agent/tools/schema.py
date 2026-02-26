"""Schema introspection tool for exploring the MotherDuck data warehouse."""

from langchain_core.tools import tool
from db.database import get_schema_info


@tool
def introspect_schema() -> dict:
    """Get the data warehouse schema including all tables and their columns.

    Returns information about all tables across the BrowserBase warehouse schemas
    (bronze_supabase, silver_core, gold_marts, gold_metrics), including column names
    and data types. Use this to understand what data is available before writing queries.

    Tables are returned as schema.table_name keys (e.g. gold_metrics.v_daily_kpis).

    Returns:
        A dictionary mapping fully-qualified table names to lists of column definitions.
        Each column definition includes: name, type, nullable.
    """
    return get_schema_info()
