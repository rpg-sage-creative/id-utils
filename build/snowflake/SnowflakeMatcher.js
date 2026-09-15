import { isNullOrUndefined } from "@rsc-utils/type-utils";
import { isNilSnowflake } from "./isNilSnowflake.js";
import { isNonNilSnowflake } from "./isNonNilSnowflake.js";
import { isSnowflake } from "./isSnowflake.js";
import { orNilSnowflake } from "./orNilSnowflake.js";
/** A reusable object for comparing a UUID without the need to repeatedly manipulate the value. */
export class SnowflakeMatcher {
    constructor(value) {
        this.value = value;
    }
    /** Stores isNonNilSnowflake(value) */
    _isNonNil;
    /** Returns isNonNilSnowflake(value) */
    get isNonNil() {
        return this._isNonNil ?? (this._isNonNil = isNonNilSnowflake(this.value));
    }
    /** Stores isSnowflake(value) */
    _isValid;
    /** Returns isSnowflake(value) */
    get isValid() {
        return this._isValid ?? (this._isValid = isSnowflake(this.value));
    }
    /** The value used to compare to other values. */
    _matchValue;
    /** The value used to compare to other values. */
    get matchValue() {
        return this._matchValue ?? (this._matchValue = orNilSnowflake(this.value));
    }
    /** Stores the raw value. */
    value;
    /** Returns true if the given value is considered a match. */
    matches(other) {
        if (!this.isValid || isNullOrUndefined(other)) {
            return false;
        }
        if (typeof (other) === "string") {
            if (this.isNonNil) {
                return this.matchValue === orNilSnowflake(other);
            }
            return isNilSnowflake(other);
        }
        if (!other.isValid || this.isNonNil !== other.isNonNil) {
            return false;
        }
        return this.matchValue === other.matchValue;
    }
    matchesAny(...args) {
        return args.flat(1).some(value => this.matches(value));
    }
    /** Returns the original value. */
    toString() {
        return this.value;
    }
    /** Convenience method for new SnowflakeMatcher(value) */
    static from(value) {
        return new SnowflakeMatcher((typeof (value) === "string" ? value : value?.value));
    }
}
