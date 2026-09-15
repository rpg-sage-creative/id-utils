import { DiscordSnowflake } from "@sapphire/snowflake";
/** A convenience method for generating Discord snowflakes and returning them as a string. */
export function generateSnowflake(options) {
    const timestamp = options?.ts;
    const increment = options?.seq ? BigInt(options.seq) : undefined;
    return DiscordSnowflake.generate({ increment, timestamp }).toString();
}
/** @deprecated use generateSnowflake() instead */
export const randomSnowflake = generateSnowflake;
