import { describe, expect, test } from "vitest";

import { bp, mq, rem } from "./Utilities.styled";


describe("Properly convert from px to rem", () => {
  test("0 returns the string '0', not 0rem", () => expect(rem(0)).toBe("0"));

  test("16px returns 1rem", () => expect(rem(16)).toBe("1rem"));

  test("48px returns 3rem", () => expect(rem(48)).toBe("3rem"));

  test("-48px returns -3rem", () => expect(rem(-48)).toBe("-3rem"));

  test("32px with omitUnit flag as true returns 2", () =>
    expect(rem(32, true)).toBe("2"));

  test("16px with omitUnit flag as true appended with another unit returns 1 + appended unit", () =>
    expect(rem(16, true) + "vh").toBe("1vh"));
});

describe("Media queries work as intended", () => {
  test("bp.small returns 768px => 48em", () => expect(bp.small).toBe("48em"));
  test("mq.small returns the right query", () =>
    expect(mq.small).toBe("(min-width: 48em)"));
});
