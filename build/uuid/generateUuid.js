import { v7 } from "uuid";
/**
 * A convenience method for uuid.v7().
 * Why? ... Sometimes I am lazy and only want one import in my file.
 * This way I can import { isUuid, generateUuid } from "@rsc-utils/core-utils" instead of needing to also import from uuid.
*/
export function generateUuid(args) {
    const msecs = typeof (args?.ts) === "bigint" ? +args.ts.toString() || undefined : +args?.ts || undefined;
    const seq = typeof (args?.seq) === "bigint" ? +args.seq.toString() || undefined : args?.seq;
    return v7({ msecs, seq });
}
/** @deprecated use generateUuid() */
export const randomUuid = generateUuid;
