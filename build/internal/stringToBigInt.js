export function stringToBigInt(value, radix) {
    const size = 10;
    const factor = BigInt(radix ** size);
    let i = value.length % size || size;
    const parts = [value.slice(0, i)];
    while (i < value.length) {
        parts.push(value.slice(i, i += size));
    }
    return parts.reduce((r, v) => r * factor
        + BigInt(parseInt(v, radix)), 0n);
}
