import type { Optional } from "@rsc-utils/type-utils";
import { type STRICT_UUID } from "./types.js";
/** Returns a strict UUID (lowerCase) if it is a valid UUID, otherwise it returns NIL_UUID. */
export declare function orNilUuid(value: Optional<string>): STRICT_UUID;
