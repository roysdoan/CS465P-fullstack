/* global process */
import express from "express";
import "dotenv/config";

const app = express();
const port = 5001;

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.get("/api/countries", async (req, res) => {
  try {
    const countries = [];
    let offset = 0;
    let more = true;

    while (more) {
      const response = await fetch(
        `https://api.restcountries.com/countries/v5?limit=100&offset=${offset}&response_fields=names,capitals,currencies,population,flag,region,codes`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REST_COUNTRIES_API_KEY}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Countries API returned status ${response.status}`);
      }

      const result = await response.json();
      countries.push(...result.data.objects);
      more = result.data.meta.more;
      offset += result.data.objects.length;
    }

    countries.sort((a, b) => a.names.common.localeCompare(b.names.common));

    res.json(countries);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Could not load countries." });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
