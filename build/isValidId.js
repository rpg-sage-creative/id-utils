import { isMaxUuid } from "./uuid/isMaxUuid.js";
import { isNonNilUuid } from "./uuid/isNonNilUuid.js";
import { isNonNilSnowflake } from "./snowflake/isNonNilSnowflake.js";
/** TypeGuard for valid Snowflake (non-nil) or UUID (non-nil, non-max). */
export function isValidId(id) {
    return typeof (id) === "string"
        ? isNonNilSnowflake(id) || (isNonNilUuid(id) && !isMaxUuid(id))
        : false;
}
