import React from "react";

import { footer } from "../sass/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        <i className="lni lni-home"></i>1234 Fictional Street #5432 New York, NY
        10000-0000
      </p>
      <p>
        <i className="lni lni-phone"></i>(000) 000-0000
      </p>
      <p>
        <i className="lni lni-envelope"></i>info@untitled.tld
      </p>
      <p>© wordMind 2020. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
