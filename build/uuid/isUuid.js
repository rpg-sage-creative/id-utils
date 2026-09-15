import { validate } from "uuid";
/** Returns true if a valid UUID string (regardless of case), or false otherwise. */
export function isUuid(value) {
    return validate(value);
}
