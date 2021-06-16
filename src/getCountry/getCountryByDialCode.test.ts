import getCountryByDialCode from "./getCountryByDialCode";

const IR = {
  alpha2: "IR",
  alpha3: "IRN",
  name: {
    en: "Iran",
    fa: "ایران",
  },
  dialCode: "+98",
  svgUrl: "/c/ca/Flag_of_Iran.svg",
  emoji: "🇮🇷",
  unicode: "U+1F1EE U+1F1F7",
  numericCode: "364",
};

test("getCountryByDialCode tests", () => {
  const queries = ["+98", "98", 98];
  const wrongQueries = ["1000", 1000, "abc"];
  queries.forEach((query) => {
    expect(getCountryByDialCode(query)).toStrictEqual(IR);
  });

  wrongQueries.map((wrongQuery) => {
    expect(getCountryByDialCode(wrongQuery)).toBe(undefined);
  });
});
