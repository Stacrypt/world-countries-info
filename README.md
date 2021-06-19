# World Countries Info

## Install

```shell
npm install @stacrypt/world-countries-info
```

This package helps you if you need the list of countries for your web app! This package provides you a complete list of countries in the world, and some useful functions.

## Usage
```typescript
import countries, { getCountry, getCountryByDialCode, getFullSvgUrl } from 'world-countries-info'


// An array of all countries you can use in any way!

countries.filter(country => country.emoji === "🇺🇸")


// Use this function to find the correct country based on it's name (english, and persian) or code (alpha2, alpha3, numeric) or even it's emoji!

const US = getCountry("US")


// Use this function to find the correct country based on it's dial code

const Netherlands = getCountryByDialCode(528)


// This function helps you get the full svg url from wikimedia

const USSvgUrl = US && getFullSvgUrl(US.svgUrl)

```

These packages/codes helped us with this package:
* [https://gist.github.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208](https://gist.github.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208)

* [https://github.com/ronatskiy/country-flags-svg](https://github.com/ronatskiy/country-flags-svg)

* [https://gist.github.com/filipemeneses/5a7d04a8198bfb1a756060c08d081805](https://gist.github.com/filipemeneses/5a7d04a8198bfb1a756060c08d081805)

* [https://gist.github.com/mehdico/e84d2f585e23d2a8ac6eb7f223658796](https://gist.github.com/mehdico/e84d2f585e23d2a8ac6eb7f223658796)
