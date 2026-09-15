import { MAX } from "uuid";
/** Returns true if the value is a nil UUID. */
export function isMaxUuid(value) {
    return value === MAX;
}
