import React from "react";

// Styled-components
import { Style } from "./Style";

const Footer = () => {
  return (
    <Style>
      Challenge by{" "}
      <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
        DevChallenge
      </a>
      . Coded by{" "}
      <a href="https://github.com/Ignaherrero" target="_blank" rel="noreferrer">
        Ignacio Herrero.
      </a>
    </Style>
  );
};

export default Footer;
