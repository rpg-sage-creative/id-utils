const SnowflakeRegExp = (/\b(?<id>\d{16,})\b/);
/** A convenient method for grabbing the first Snowflake present in the string. */
export function parseSnowflake(value) {
    return typeof (value) === "string" ? SnowflakeRegExp.exec(value)?.groups?.id : undefined;
}
