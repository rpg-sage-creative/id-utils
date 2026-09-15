import type { Snowflake } from "./types.js";
type SnowflakeOptions = {
    /** sequence number for generating mulitple Snowflake values for a specific timestamp */
    seq?: bigint | number;
    /** the timestamp to use as the date portion of the Snowflake */
    ts?: bigint | Date | number;
};
/** A convenience method for generating Discord snowflakes and returning them as a string. */
export declare function generateSnowflake(options?: SnowflakeOptions): Snowflake;
/** @deprecated use generateSnowflake() instead */
export declare const randomSnowflake: typeof generateSnowflake;
export {};
