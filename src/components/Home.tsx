import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./radialgraph";
import RadarChart from "./RadarChart";

export default function Home() {
  return (
    <Layout>
      {/* <h2>{name("Adrian", "Matos")}</h2>
      <DeviceChart
        options={{
          colors: ["#0f6375", "#129FC0", "#C99D9B"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#c00", "#3469a7", "#c1b01e"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      /> */}
      <RadialChart />
       <RadarChart/> 
    </Layout>
  );
}