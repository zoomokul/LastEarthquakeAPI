const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

const URL_TO_SCRAPE = 'https://deprem.afad.gov.tr/last-earthquakes.html'; // Replace with the actual URL

app.get('/api/earthquakes', async (req, res) => {
  try {
    const response = await axios.get(URL_TO_SCRAPE);
    const $ = cheerio.load(response.data);
    const earthquakes = [];

    $('tr').each((index, element) => {
    const id = $(element).find('td').eq(7).text();
      const date = $(element).find('td').eq(0).text();
      const scale = $(element).find('td').eq(5).text();
      const location = $(element).find('td').eq(6).text();

      earthquakes.push({ id,location,date, scale});
    });

    res.json(earthquakes);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
