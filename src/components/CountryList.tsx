import React, { useState } from "react";
import { Country } from "../types/types";
import { fetchCountries } from "../api/fetchCountries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [favorites, setFavorites] = useState<Country[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Country[] = await fetchCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !favorites.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setFavorites([...favorites, country]);
    } else {
      setFavorites(
        favorites.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl py-8 font-bold">즐겨찾기 국가</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {favorites.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>

      <h2 className="text-2xl py-8 font-bold">모든 국가</h2>
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
