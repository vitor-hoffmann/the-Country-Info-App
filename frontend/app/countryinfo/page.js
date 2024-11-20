"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function CountryInfo({ searchParams }) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const { code } = searchParams;

      if (!code) {
        setError("Country code not provided.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/countries/${code.toUpperCase()}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        setError("Failed to fetch country data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [searchParams]);

  if (loading)
    return <p className="text-center text-gray-500 mt-8">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!country)
    return <p className="text-center text-gray-500 mt-8">Country not found.</p>;

  // Preparar os dados do gráfico
  const populationData = {
    labels: country.populationData.populationCounts.map((data) => data.year),
    datasets: [
      {
        label: "Population",
        data: country.populationData.populationCounts.map((data) => data.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Country: {country.countryInfo.commonName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg font-semibold">
            <span className="text-gray-600">Official name:</span>{" "}
            {country.countryInfo.officialName}
          </p>
          <p className="text-lg font-semibold">
            <span className="text-gray-600">Country code:</span>{" "}
            {country.countryInfo.countryCode}
          </p>
          <p className="text-lg font-semibold">
            <span className="text-gray-600">Region:</span>{" "}
            {country.countryInfo.region}
          </p>
        </div>
        <div className="flex justify-center items-center">
          {country.flagData && (
            <img
              src={country.flagData.flag}
              alt={`${country.countryInfo.commonName} flag`}
              className="w-32 h-20 object-cover rounded shadow-md"
            />
          )}
        </div>
      </div>
      {country.countryInfo.borders.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Borders</h2>
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Country</th>
                <th className="border border-gray-300 px-4 py-2">
                  Official Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Country Code
                </th>
                <th className="border border-gray-300 px-4 py-2">Region</th>
              </tr>
            </thead>
            <tbody>
              {country.countryInfo.borders.map(
                ({ commonName, officialName, countryCode, region }) => (
                  <tr key={countryCode}>
                    <Link href={`/countryinfo?code=${countryCode}`}>
                      {commonName}
                    </Link>
                    <td className="border border-gray-300 px-4 py-2">
                      {officialName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {countryCode}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {region}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Population over years:</h2>
      <div className="max-w-4xl mx-auto">
        <Line data={populationData} />
      </div>
    </div>
  );
}
