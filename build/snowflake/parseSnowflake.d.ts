import type { Optional } from "@rsc-utils/type-utils";
import type { Snowflake } from "./types.js";
/** A convenient method for grabbing the first Snowflake present in the string. */
export declare function parseSnowflake(value: Optional<string>): Snowflake | undefined;
