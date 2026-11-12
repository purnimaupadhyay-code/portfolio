import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}portfolio.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Portfolio...</p>;
  if (error) return <p>Unable to load portfolio data</p>;

  return (
    <>
      <Navbar name={data.name} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer name={data.name} socials={data.socials} />
    </>
  );
}

export default App;
