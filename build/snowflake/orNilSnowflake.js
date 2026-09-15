import { isNonNilSnowflake } from "./isNonNilSnowflake.js";
import { NIL_SNOWFLAKE } from "./types.js";
/** Returns the value if it is a valid Snowflake, otherwise it returns NIL_SNOWFLAKE. */
export function orNilSnowflake(value) {
    return isNonNilSnowflake(value) ? value : NIL_SNOWFLAKE;
}
