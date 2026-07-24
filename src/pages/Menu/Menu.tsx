import { useState } from "react";
import Menuhero from "../../components/pages/Menu/Menuhero";
import Menufilterbar from "../../components/pages/Menu/Menufilterbar";
import Outletgrid from "../../components/pages/Menu/Outletgrid";
import Menucta from "../../components/pages/Menu/Menucta";

export default function Menu() {
  const [activeRegion, setActiveRegion] = useState("All");

  return (
    <div className="min-h-screen bg-black text-white">
      <Menuhero />
      <Menufilterbar activeRegion={activeRegion} onRegionChange={setActiveRegion} />
      <Outletgrid activeRegion={activeRegion} />
      <Menucta />
    </div>
  );
}
