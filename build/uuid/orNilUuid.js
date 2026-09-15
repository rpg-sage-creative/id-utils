import { validate } from "uuid";
import { NIL_UUID } from "./types.js";
/** Returns a strict UUID (lowerCase) if it is a valid UUID, otherwise it returns NIL_UUID. */
export function orNilUuid(value) {
    return validate(value) ? value.toLowerCase() : NIL_UUID;
}
