import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Logo } from '../Logo';
import zenika from './zenika.png';
import './Hero.css';

const Hero = ({
  title = null,
  description = null,
  small = false,
}) => (
  <article className={cn('hero', { 'hero--small': small })}>
    <img src={zenika} alt="zenika" width="60px" className="hero__zenika-logo" />
    {!small && <Logo className="hero__logo" />}
    <section className="hero__section">
      <div className="hero__title">{title}</div>
      <p>{description}</p>
    </section>
  </article>
);

Hero.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  small: PropTypes.bool,
};

Hero.defaultProps = {
  small: false,
};

export default Hero;
