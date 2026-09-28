import { describe, it, expect } from "vitest";
import addNums from "../utils/addNums";

describe("addNums function", () => {
  it("adds a list of integers", () => {
    const sum = addNums([1, 2, 3]);
    expect(sum).toEqual(6);
  });
});
