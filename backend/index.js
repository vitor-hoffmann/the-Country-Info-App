const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(process.env.COUNTRIES);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter países disponíveis." });
  }
});

app.get("/countries/:code", async (req, res) => {
  const { code } = req.params;

  try {
    // Obtenha informações do país com base no código
    const countryInfoResponse = await axios.get(
      `${process.env.NAGER_API_URL}/CountryInfo/${code}`
    );

    const populationResponse = await axios.get(
      process.env.COUNTRIES_POPULATION_API
    );

    const flagResponse = await axios.get(process.env.COUNTRIES_FLAG_API);

    const populationData = populationResponse.data.data.find(
      (data) => data.country === countryInfoResponse.data.commonName
    );

    const flagData = flagResponse.data.data.find(
      (data) => data.name === countryInfoResponse.data.commonName
    );

    const combinedData = {
      countryInfo: countryInfoResponse.data,
      populationData,
      flagData,
    };

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ message: "Error on getting country info." });
  }
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
