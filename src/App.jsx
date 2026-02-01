import React from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}
