import countries from "../data/countries";
import { Country } from "../data/Country";

/**
 * Finds and returns a country based on it's name (english, and persian) or code (alpha2, alpha3, numeric) or even it's emoji!
 */
const getCountry = (searchQuery: string | number): Country | undefined => {
  let foundCountry: Country | undefined = undefined;
  const query = `${searchQuery}`.toLowerCase();

  const length = countries.length;
  for (let i = 0; i < length; i++) {
    const country = countries[i];
    const { alpha2, alpha3, emoji, name, numericCode } = country;
    if (
      alpha2.toLowerCase() === query ||
      alpha3.toLowerCase() === query ||
      name.en.toLowerCase() === query ||
      name.fa.toLowerCase() === query ||
      emoji === query ||
      numericCode === query
    ) {
      foundCountry = country;
      break;
    }
  }

  return foundCountry;
};

export default getCountry;
