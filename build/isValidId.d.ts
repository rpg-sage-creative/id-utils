import type { Optional } from "@rsc-utils/type-utils";
import type { Snowflake } from "./snowflake/types.js";
import type { UUID } from "./uuid/types.js";
/** TypeGuard for valid Snowflake (non-nil) or UUID (non-nil, non-max). */
export declare function isValidId(id: Optional<string>): id is Snowflake | UUID;
