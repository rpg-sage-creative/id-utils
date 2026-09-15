import { isWholeNumberString } from "@rsc-utils/type-utils";
/** Returns true if the value is a series of at least 16 numeric digits. */
export function isSnowflake(value) {
    return isWholeNumberString(value) && value.length >= 16;
}
