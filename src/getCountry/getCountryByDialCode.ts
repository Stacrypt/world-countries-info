import countries from "../data/countries";
import { Country } from "../data/Country";

/**
 * Finds and returns a country based on it's dial code (1, "+1", "1")
 */
const getCountryByDialCode = (
  dialCode: string | number
): Country | undefined => {
  let query = `${dialCode}`;
  if (!/\+/.test(query)) {
    query = `+${query}`;
  }
  let foundCountry: Country | undefined = undefined;
  const length = countries.length;
  for (let i = 0; i < length; i++) {
    const country = countries[i];
    const { dialCode } = country;
    if (dialCode === query) {
      foundCountry = country;
      break;
    }
  }
  return foundCountry;
};

export default getCountryByDialCode;
