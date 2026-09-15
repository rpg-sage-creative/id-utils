import type { STRICT_UUID } from "./types.js";
type UuidArgs = {
    /** sequence number for generating mulitple UUID values for a specific timestamp */
    seq?: bigint | number;
    /** the timestamp to use as the date portion of the UUID */
    ts?: bigint | Date | number;
};
/**
 * A convenience method for uuid.v7().
 * Why? ... Sometimes I am lazy and only want one import in my file.
 * This way I can import { isUuid, generateUuid } from "@rsc-utils/core-utils" instead of needing to also import from uuid.
*/
export declare function generateUuid(args?: UuidArgs): STRICT_UUID;
/** @deprecated use generateUuid() */
export declare const randomUuid: typeof generateUuid;
export {};
