const NonNilSnowflake = /^(?!0{16,})\d{16,}$/;
/** Returns true if the value is a valid non-nil Snowflake. */
export function isNonNilSnowflake(value) {
    return typeof (value) === "string" && NonNilSnowflake.test(value);
}
