import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load countries from our backend when this page opens
  useEffect(() => {
    async function loadCountries() {
      try {
        const response = await fetch("/api/countries");

        if (!response.ok) {
          throw new Error("Could not load countries.");
        }

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, []);

  return (
    <main>
      <Link to="/home">Back to home</Link>
      <h1>All Countries</h1>
      {loading && <p>Loading countries...</p>}
      {error && <p>{error}</p>}
      {/* The backend returns countries in alphabetical order */}
      {countries.map((country) => (
        <section key={country.names.common}>
          <h2>{country.names.common}</h2>

          {/* Show all capitals and currencies, with fallbacks for missing data */}

          <p>
            Capital:{" "}
            {country.capitals?.map((capital) => capital.name).join(", ") ||
              "Not available"}
          </p>

          <p>
            Currency:{" "}
            {country.currencies
              ?.map(
                (currency) =>
                  `${currency.name} (${currency.symbol || "No symbol"})`,
              )
              .join(", ") || "Not available"}
          </p>
        </section>
      ))}
    </main>
  );
}

export default Countries;
