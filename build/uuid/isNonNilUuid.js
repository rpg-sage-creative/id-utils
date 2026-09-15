import { NIL, validate } from "uuid";
/** Returns true if the value is a nil UUID. */
export function isNonNilUuid(value) {
    return validate(value) && value !== NIL;
}
