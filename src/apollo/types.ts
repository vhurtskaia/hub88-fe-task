export type Country = {
  code: string;
  name: string;
};

export type CountriesCode = {
  code?: string;
};

export type CountriesList = {
  countries: Country[];
};
