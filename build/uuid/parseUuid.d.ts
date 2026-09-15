import type { Optional } from "@rsc-utils/type-utils";
import type { STRICT_UUID } from "./types.js";
/** A convenient method for grabbing the first UUID present in the string. */
export declare function parseUuid(value: Optional<string>): STRICT_UUID | undefined;
