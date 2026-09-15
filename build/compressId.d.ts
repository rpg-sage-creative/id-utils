import type { Optional } from "@rsc-utils/type-utils";
import type { Snowflake } from "./snowflake/types.js";
import type { UUID } from "./uuid/types.js";
/** Compresses a Snowflake or UUID into a smaller string by changing the radix of the number. */
export declare function compressId(value: Snowflake | UUID, radix?: number): string;
export declare function compressId(value: Optional<Snowflake | UUID>, radix?: number): string | undefined;
