import { Country } from "../types/types";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div
      className="w-full  max-w-lg p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform cursor-pointer"
      onClick={() => handleSelectCountry(country)}
    >
      <img
        className="w-full h-2/4  border-2 border-black"
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />
      <h2 className="mt-4 text-xl font-semibold">{country.name.common}</h2>
      <div className="mt-2 text-gray-600">{country.capital}</div>
    </div>
  );
};

export default CountryCard;
