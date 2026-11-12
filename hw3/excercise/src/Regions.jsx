import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Regions = function Regions() {
  const [regions, setRegions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRegions = async function loadRegions() {
      try {
        const response = await fetch("/api/countries");

        if (!response.ok) {
          throw new Error("Could not load regions.");
        }

        const countries = await response.json();
        const grouped = {};

        // Group country names by region, including incomplete records
        countries.forEach((country) => {
          const region = country.region?.trim() || "Unknown";
          const name = country.names?.common || "Unnamed country";

          if (!grouped[region]) {
            grouped[region] = [];
          }

          grouped[region].push(name);
        });

        setRegions(grouped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRegions();
  }, []);

  return (
    <main>
      <Link to="/home">Back to home</Link>
      <h1>Regions</h1>

      {loading && <p>Loading regions...</p>}
      {error && <p>{error}</p>}

      {/* List regions alphabetically with their counts and country names */}
      {Object.keys(regions)
        .sort()
        .map((region) => (
          <section key={region}>
            <h2>{region}</h2>
            <p>Number of countries: {regions[region].length}</p>
            <p>{regions[region].join(", ")}</p>
          </section>
        ))}
    </main>
  );
};

export default Regions;
