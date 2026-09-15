import type { Optional } from "@rsc-utils/type-utils";
import type { UUID } from "./types.js";
/** Returns true if the value is a nil UUID. */
export declare function isNonNilUuid(value: Optional<string>): value is UUID;
