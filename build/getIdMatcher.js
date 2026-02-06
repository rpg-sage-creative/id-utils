import { isSnowflake, SnowflakeMatcher } from "@rsc-utils/snowflake-utils";
import { isUuid, UuidMatcher } from "@rsc-utils/uuid-utils";
export function getIdMatcher(value) {
    if (value) {
        if (isSnowflake(value)) {
            return new SnowflakeMatcher(value);
        }
        if (isUuid(value)) {
            return new UuidMatcher(value);
        }
    }
    return {
        isNonNil: false,
        isValid: false,
        matchValue: "",
        value,
        matches: () => false,
        matchesAny: () => false,
        toString: () => value
    };
}
