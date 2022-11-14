import React from "react";
import { Chrono } from "react-chrono";
import data from "../LeadsComponents/Data";

export default function HorizontalTimeLiner() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "300px" }}>
        <Chrono items={data} mode="HORIZONTAL" />
      </div>
    </div>
  );
}
