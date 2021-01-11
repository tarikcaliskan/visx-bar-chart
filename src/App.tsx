import * as React from "react";
import "./styles.css";
import Example from "./Item";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

export default function App() {
  return (
    <ParentSize>
      {({ width, height }) => <Example width={width} height={500} />}
    </ParentSize>
  );
}
