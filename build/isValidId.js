import { isNonNilSnowflake } from "@rsc-utils/snowflake-utils";
import { isMaxUuid, isNonNilUuid } from "@rsc-utils/uuid-utils";
export function isValidId(id) {
    return typeof (id) === "string"
        ? isNonNilSnowflake(id) || (isNonNilUuid(id) && !isMaxUuid(id))
        : false;
}
