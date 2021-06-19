import {
  alpha2ToCountries,
  alpha3ToAlpha2,
  numericCodeToAlpha2,
} from "../data/countries";
import { Country } from "../data/Country";

/**
 * Finds and returns a country based on it's code (alpha2, alpha3, dialCode)
 */
const getCountry = (searchQuery: string | number): Country | undefined => {
  const query = `${searchQuery}`.toUpperCase();
  return (
    alpha2ToCountries[query] ??
    alpha2ToCountries[alpha3ToAlpha2[query]] ??
    alpha2ToCountries[numericCodeToAlpha2[query]]
  );
};

export default getCountry;
