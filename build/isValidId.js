import { isNonNilSnowflake } from "@rsc-utils/snowflake-utils";
import { isMaxUuid, isNonNilUuid } from "@rsc-utils/uuid-utils";
/** TypeGuard for valid Snowflake (non-nil) or UUID (non-nil, non-max). */
export function isValidId(id) {
    return typeof (id) === "string"
        ? isNonNilSnowflake(id) || (isNonNilUuid(id) && !isMaxUuid(id))
        : false;
}
