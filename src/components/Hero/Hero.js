import React from "react";

import logo from "./logo.svg";
import "./Hero.css";

const Hero = () => (
  <article className="hero">
    <img className="hero__logo" src={logo} alt="logo" />
    <section className="hero__section">
      <h1>&lt;Coding <strong>an open source</strong> World&gt;</h1>
      <p>
        Duis pulvinar tellus ullamcorper dui consequat ultricies. Duis
        bibendum tincidunt ultricies.Aenean tincidunt accumsan aliquet. Nulla
        sed eros vitae ligula suscipit consequat ornare vitae augue.Donec sed
        sem a ligula finibus pellentesque. Vivamus nec sem faucibus, auctor
        est non, sodales erat.
      </p>
    </section>
  </article>
);

export default Hero;
