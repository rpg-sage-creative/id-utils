import type { Optional } from "@rsc-utils/type-utils";
import type { Snowflake } from "./types.js";
/** Returns true if the value is a valid non-nil Snowflake. */
export declare function isNonNilSnowflake(value: Optional<string>): value is Snowflake;
