import { alpha2ToCountries, dialCodeToAlpha2 } from "../data/countries";
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
  return alpha2ToCountries[dialCodeToAlpha2[query]];
};

export default getCountryByDialCode;
