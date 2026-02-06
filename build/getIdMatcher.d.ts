import type { Matcher, Optional } from "@rsc-utils/type-utils";
/**
 * Used to create a matcher for an ID.
 * Creates a matcher that always returns false if the given ID isn't a snowflake or uuid.
 */
export declare function getIdMatcher(value: Optional<string>): Matcher;
