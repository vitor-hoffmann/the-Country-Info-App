"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Lista de Países</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <Link href={`/countryinfo?code=${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
