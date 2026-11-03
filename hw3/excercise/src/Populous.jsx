import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Populous() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load and filter country data when this page opens
  useEffect(() => {
    async function loadCountries() {
      try {
        const response = await fetch("/api/countries");

        if (!response.ok) {
          throw new Error("Could not load countries");
        }

        const data = await response.json();

        // Keep populations of at least 50 million, largest first
        const populous = data
          .filter((country) => country.population >= 50000000)
          .sort((a, b) => b.population - a.population);

        setCountries(populous);
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
      <h1>Populous Countries</h1>
      <p>Countries with at least 50 million people</p>

      {loading && <p>Loading countries...</p>}
      {error && <p>{error}</p>}

      {countries.map((country) => (
        <section key={country.names.common}>
          <h2>{country.names.common}</h2>

          {/* Display the flag when an image URL is available */}
          {country.flag?.url_png ? (
            <img
              src={country.flag.url_png}
              alt={`Flag of ${country.names.common}`}
              width="150"
            />
          ) : (
            <p>Flag not available</p>
          )}

          <p>Population: {country.population.toLocaleString()}</p>
        </section>
      ))}
    </main>
  );
}

export default Populous;
