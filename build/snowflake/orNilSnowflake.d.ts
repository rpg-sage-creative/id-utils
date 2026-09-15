import type { Optional } from "@rsc-utils/type-utils";
import { type Snowflake } from "./types.js";
/** Returns the value if it is a valid Snowflake, otherwise it returns NIL_SNOWFLAKE. */
export declare function orNilSnowflake(value: Optional<string>): Snowflake;
