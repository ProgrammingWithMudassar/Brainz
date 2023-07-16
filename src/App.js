import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Staking from "./Pages/Staking/Staking";
import PrivateSale from "./Pages/PrivateSale/PrivateSale";
import Presale from "./Pages/PreSale/PreSale";
import Governance from "./Pages/Governance/Governance";

import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/privatesale" element={<PrivateSale />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/governance" element={<Governance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
