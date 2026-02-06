import { compressId } from "./compressId.js";
import { stringToBigInt } from "./internal/stringToBigInt.js";
export function decompressId(value, radix = 36) {
    if (value) {
        if (value.includes("-")) {
            const lengths = [8, 4, 4, 4, 12];
            return value.split("-").map((s, i) => compressId(decompressId(s, radix), 16).padStart(lengths[i] ?? 0, "0")).join("-");
        }
        else if (value === "0") {
            return "0".padEnd(16, "0");
        }
        else {
            return stringToBigInt(value, radix).toString();
        }
    }
    return undefined;
}
