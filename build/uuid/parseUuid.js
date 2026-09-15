import { UuidRegExp } from "./UuidRegExp.js";
/** A convenient method for grabbing the first UUID present in the string. */
export function parseUuid(value) {
    return typeof (value) === "string" ? UuidRegExp.exec(value)?.groups?.uuid.toLowerCase() : undefined;
}
