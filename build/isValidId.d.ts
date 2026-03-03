import { type Snowflake } from "@rsc-utils/snowflake-utils";
import type { Optional } from "@rsc-utils/type-utils";
import { type UUID } from "@rsc-utils/uuid-utils";
/** TypeGuard for valid Snowflake (non-nil) or UUID (non-nil, non-max). */
export declare function isValidId(id: Optional<string>): id is Snowflake | UUID;
