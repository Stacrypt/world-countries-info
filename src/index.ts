import {
  alpha2ToCountries,
  alpha3ToAlpha2,
  dialCodeToAlpha2,
  numericCodeToAlpha2,
} from "./data/countries";
import { getCountry, getCountryByDialCode } from "./getCountry";
import { getFullSvgUrl } from "./svgUrl";

export {
  getCountry,
  getFullSvgUrl,
  getCountryByDialCode,
  alpha2ToCountries,
  alpha3ToAlpha2,
  dialCodeToAlpha2,
  numericCodeToAlpha2,
};
export default alpha2ToCountries;
