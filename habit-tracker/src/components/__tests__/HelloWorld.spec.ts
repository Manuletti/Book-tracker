import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../../App.vue";

describe("Renders app", () => {
  it("Renders Hello", () => {
    const wrapper = App;
    expect(wrapper).toContain("h1");
  });
});
