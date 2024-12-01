# Currency Converter

A simple currency converter web application that allows users to convert an amount from one currency to another based on live exchange rates. The user can select the amount to convert and choose currencies from a dropdown list.

## Features
- Convert amounts between different currencies.
- Select the source and destination currencies from dropdown menus.
- Simple and intuitive user interface with a dark-to-light color scheme.
- Displays flags of the selected currencies.
- Supports conversion for **up to 30 currencies**

## Technologies Used
- HTML
- CSS (for styling)
- JavaScript (for functionality)
- API integration for real-time exchange rates and flags

### APIs Used
1. **Exchange Rate API**:
   - The currency conversion functionality is powered by the [ExchangeRate-API](https://www.exchangerate-api.com/). 
   - The API is used to fetch the exchange rate based on the selected source and destination currencies.

2. **Flag API**:
   - The country flags are fetched using the [CountryFlags API](https://www.countryflags.io/), which provides the appropriate flag images for the selected currencies.


