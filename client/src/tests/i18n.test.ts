import { describe, it, expect } from "vitest";
import i18n from "../i18n";

describe("i18n setup", () => {
  it("defaults to English", () => {
    expect(i18n.language).toEqual("en");
  });

  it("resolves keys from the en locale file", () => {
    expect(i18n.t("nav.home")).toEqual("Home");
    expect(i18n.t("home.title")).toEqual("Hello World");
  });
});
