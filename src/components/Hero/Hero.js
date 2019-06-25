import React from "react";

import { Logo } from "../Logo";
import byZenika from "./byzenika.png";
import zenika from "./zenika.png";
import "./Hero.css";

const Hero = () => (
  <article className="hero">
    <img src={zenika} alt="zenika" width="60px" className="hero__zenika-logo" />
    <Logo className="hero__logo" />
    <section className="hero__section">
      <div className="hero__title">
        <h1>&lt;Coding <strong>an open source</strong> World&gt;</h1>
        <img src={byZenika} alt="by Zenika" width="150px" />
      </div>
      <p>
        Zenika's DNA is based on open source philosophy. <br />
        Driven by this passion, we contribute to projects and share more and more with communities. <br />
      </p>
    </section>
  </article>
);

export default Hero;
