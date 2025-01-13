import React from "react";

import { Route, Routes } from "react-router-dom";

import Home  from "./pages/Home.jsx";
import Notfound  from "./pages/Notfound.jsx";
import Layout from "./Components/Layout.jsx";
import Kuhni from "./pages/Kuhni.jsx";
import Krovati from "./pages/Krovati.jsx";
import Garderobnie from "./pages/Garderobnie.jsx";
import Prihojie from "./pages/Prihojie.jsx";
import About from "./pages/About.jsx";
import Stoli from "./pages/Stoli.jsx";
import ShkafiKupe from "./pages/ShkafiKupe.jsx";
import ShkafiRaspashnie from "./pages/ShkafiRaspashnie.jsx";
import Matraci from "./pages/Matraci.jsx";
import Detskie from "./pages/Detskie.jsx";
import Sanuzli from "./pages/Sanuzli.jsx";
import RabochieZoni from "./pages/RabochieZoni.jsx";
import DecorativniePaneli from "./pages/DecorativniePaneli.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";


function App() {
  return (
    <>
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path="kuhni" element={<Kuhni />} />
                  <Route path="stoli_i_stulya" element={<Stoli />} />
                  <Route path="garderobnie" element={<Garderobnie />} />
                  <Route path="prihojie" element={<Prihojie />} />
                  <Route path="shkafi_kupe" element={<ShkafiKupe />} />
                  <Route path="shkafi_raspashnie" element={<ShkafiRaspashnie />} />
                  <Route path="krovati" element={<Krovati />} />
                  <Route path="matraci" element={<Matraci />} />
                  <Route path="detskie" element={<Detskie />} />
                  <Route path="sanuzli" element={<Sanuzli />} />
                  <Route path="rabochie_zoni" element={<RabochieZoni />} />
                  <Route path="decorativnie_paneli" element={<DecorativniePaneli />} />
                  <Route path="about" element={<About />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<Notfound />} />
              </Route>
          </Routes>

    </>
  )
}

export default App
