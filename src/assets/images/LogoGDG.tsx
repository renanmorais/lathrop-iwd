import * as React from "react";

interface LogoProps {
  color?: string
}

const LogoGDG = ({color = '#2a50c7'}: LogoProps) => (
    <img src='logowtm.png' width="153" height="15" />
);

export default LogoGDG;