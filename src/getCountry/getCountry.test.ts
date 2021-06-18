import getCountry from "./getCountry";
const US = {
  alpha2: "US",
  alpha3: "USA",
  name: {
    en: "United States",
    fa: "ایالات متحده",
  },
  dialCode: "+1",
  svgUrl: "/a/a4/Flag_of_the_United_States.svg",
  emoji: "🇺🇸",
  unicode: "U+1F1FA U+1F1F8",
  numericCode: "840",
};

test("getCountry tests", () => {
  const queries = ["us", "uS", "usa", "UsA", 840, "840"];
  queries.forEach((query) => {
    expect(getCountry(query)).toStrictEqual(US);
  });

  expect(getCountry("uss")).toBe(undefined);
});
