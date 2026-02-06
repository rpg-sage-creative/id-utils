import type { Snowflake } from "@rsc-utils/snowflake-utils";
import type { Optional } from "@rsc-utils/type-utils";
import type { UUID } from "@rsc-utils/uuid-utils";
import { compressId } from "./compressId.js";
import { stringToBigInt } from "./internal/stringToBigInt.js";

/** Decompresses a Snowflake or UUID that was compressed using compressId() back to its original value. */
export function decompressId<Type extends Snowflake | UUID>(value: string, radix?: number): Type;
export function decompressId<Type extends Snowflake | UUID>(value: Optional<string>, radix?: number): Type | undefined;
export function decompressId<Type extends Snowflake | UUID>(value: Optional<string>, radix = 36): Type | undefined {
	if (value) {
		// handle a UUID
		if (value.includes("-")) {
			const lengths = [8, 4, 4, 4, 12];
			return value.split("-").map((s, i) => compressId(decompressId(s, radix), 16).padStart(lengths[i] ?? 0, "0")).join("-") as Type;

		// handle an empty Snowflake
		}else if (value === "0") {
			return "0".padEnd(16, "0") as Type;

		// handle a Snowflake
		}else {
			return stringToBigInt(value, radix).toString() as Type;
		}
	}
	return undefined;
}
