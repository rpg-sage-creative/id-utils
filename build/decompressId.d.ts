import type { Optional } from "@rsc-utils/type-utils";
import type { Snowflake } from "./snowflake/types.js";
import type { UUID } from "./uuid/types.js";
/** Decompresses a Snowflake or UUID that was compressed using compressId() back to its original value. */
export declare function decompressId<Type extends Snowflake | UUID>(value: string, radix?: number): Type;
export declare function decompressId<Type extends Snowflake | UUID>(value: Optional<string>, radix?: number): Type | undefined;
