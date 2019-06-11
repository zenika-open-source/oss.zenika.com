import React from "react";

import logo from "./logo.svg";
import "./Hero.css";

const Hero = () => (
  <article className="hero">
    <img className="hero__logo" src={logo} alt="logo" />
    <section className="hero__section">
      <h1>&lt;Coding <strong>an open source</strong> World&gt;</h1>
      <p>
        Since the beginning, Zenika's DNA is based on open source philosophy. <br />
        Driven by this passion, we contribute and share more and more projects with communities. <br />
      </p>
    </section>
  </article>
);

export default Hero;
