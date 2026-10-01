import { describe, expect, it } from "vitest";
import { filterTutors, formatPrice, isLanguage, tutors } from "./tutors";

describe("filterTutors", () => {
  it("returns all tutors when no language is given", () => {
    expect(filterTutors(tutors)).toHaveLength(tutors.length);
  });

  it("keeps only tutors of the given language", () => {
    const result = filterTutors(tutors, "Python");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((t) => t.language === "Python")).toBe(true);
  });
});

describe("isLanguage", () => {
  it("accepts known languages and rejects anything else", () => {
    expect(isLanguage("Scratch")).toBe(true);
    expect(isLanguage("Cobol")).toBe(false);
    expect(isLanguage(undefined)).toBe(false);
  });
});

describe("formatPrice", () => {
  it("formats rubles with a thousands separator", () => {
    // ru-RU uses a narrow no-break space as the group separator
    expect(formatPrice(1800)).toBe("1 800 ₽");
  });
});
