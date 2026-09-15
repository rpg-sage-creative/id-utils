import { isNullOrUndefined } from "@rsc-utils/type-utils";
import { isNilUuid } from "./isNilUuid.js";
import { isNonNilUuid } from "./isNonNilUuid.js";
import { isUuid } from "./isUuid.js";
import { orNilUuid } from "./orNilUuid.js";
/** A reusable object for comparing a UUID without the need to repeatedly manipulate the value. */
export class UuidMatcher {
    constructor(value) {
        this.value = value;
    }
    /** Stores isNonNilUuid(value) */
    _isNonNil;
    /** Returns isNonNilUuid(value) */
    get isNonNil() {
        return this._isNonNil ?? (this._isNonNil = isNonNilUuid(this.value));
    }
    /** Stores isUuid(value) */
    _isValid;
    /** Returns isUuid(value) */
    get isValid() {
        return this._isValid ?? (this._isValid = isUuid(this.value));
    }
    /** The value used to compare to other values. */
    _matchValue;
    /** The value used to compare to other values. */
    get matchValue() {
        return this._matchValue ?? (this._matchValue = orNilUuid(this.value));
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
                return this.matchValue === orNilUuid(other);
            }
            return isNilUuid(other);
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
    /** Convenience method for new UuidMatcher(value) */
    static from(value) {
        return new UuidMatcher((typeof (value) === "string" ? value : value?.value));
    }
}
