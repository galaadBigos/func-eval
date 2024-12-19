import {describe, expect, it} from "vitest";
import {isShootScored} from "../src/functional-core/penalty-functions";

describe("PenaltyFunctions", () => {
    it("Shoot should be return true if rdm is more than 0.25", () => {
        expect(isShootScored(() => 0.26)).toBe(true);
        expect(isShootScored(() => 0.99)).toBe(true);
        expect(isShootScored(() => 1)).toBe(true);
    })
    it("Shoot should be return false if rdm is less than 0.25", () => {
        expect(isShootScored(() => 0.25)).toBe(false);
        expect(isShootScored(() => 0)).toBe(false);
    })
})