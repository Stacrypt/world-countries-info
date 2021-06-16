import getFullSvgUrl, { baseUrl } from "./getFullSvgUrl";

test("getFullSvgUrl tests", () => {
  const testString = "test";
  expect(getFullSvgUrl(testString)).toStrictEqual(baseUrl + testString);
});
