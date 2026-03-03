import { isNonNilSnowflake, type Snowflake } from "@rsc-utils/snowflake-utils";
import type { Optional } from "@rsc-utils/type-utils";
import { isMaxUuid, isNonNilUuid, type UUID } from "@rsc-utils/uuid-utils";

/** TypeGuard for valid Snowflake (non-nil) or UUID (non-nil, non-max). */
export function isValidId(id: Optional<string>): id is Snowflake | UUID {
	return typeof(id) === "string"
		? isNonNilSnowflake(id) || (isNonNilUuid(id) && !isMaxUuid(id))
		: false;
}