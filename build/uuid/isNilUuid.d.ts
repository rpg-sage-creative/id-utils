import type { Optional } from "@rsc-utils/type-utils";
import type { NIL_UUID } from "./types.js";
/** Returns true if the value is a nil UUID. */
export declare function isNilUuid(value: Optional<string>): value is NIL_UUID;
