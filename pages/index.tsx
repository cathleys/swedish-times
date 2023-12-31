import React from "react";
import Head from "next/head";
import Search from "@/features/search";

const navLinks = [
  { text: "Business" },
  { text: "Finance" },
  { text: "Tech" },
  { text: "International" },
  { text: "Climate" },
  { text: "StartUps" },
  { text: "Venture" },
  { text: "Job" },
  { text: "Market" },
  ,
];
export default function Home() {
  return (
    <>
      <Head>
        <title>the Swedish Times</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.png" />
      </Head>
      <main>
        <div className="main-nav">
          <h1>
            The
            <br />
            Swedish Times
          </h1>

          <div className="main-nav-info">
            <p>Stockholm | 14.5C</p>
            <span>19 juli 2023 | 13:34</span>
          </div>
        </div>
        <div className="sub-nav">
          <ul className="ul">
            {navLinks.map((li, index) => (
              <li key={index}>{li?.text}</li>
            ))}
          </ul>
          <Search />
        </div>
      </main>
    </>
  );
}
