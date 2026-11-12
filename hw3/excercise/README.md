Roy Doan

## Countries App

I Built HW3 exercise with React, Express, and the REST Countries API

##Setup

Run these commands inside the excercise folder:

npm install

Create a file call `.env` in folder excercise and add your API key:

REST_COUNTRIES_API_KEY=your_key_here

You can get a key at https://restcountries.com/sign-up

## Run the app

Open the terminal inside hw3/excersise and start node js:

```bash
node server.js
```

Open a second terminal in the same folder and start React:

```bash
npm run dev
```

Keep both terminals running and open http://localhost:5173/home

## Routes

- `/home`: Welcome page with links to the other pages.
- `/countries`: All countries alphabetically, with capitals and currency names and symbols
- `/populous`: Countries with at least 50 million people, sorted by population from largest to smallest, with flags
- `/regions`: Country counts and names grouped by region. Missing regions appear under "Unknown"
