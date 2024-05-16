import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind <br className="sm:block hidden" />
        Let's build something together
      </p>
      <Link to={"/contact"} className="btn">
        {" "}
        Contact
      </Link>
      <p className="cta-text">
        if you want <br className="sm:block hidden" />
        You can call me directly
      </p>
      <Link className="btn"> +91 7782036508</Link>
    </section>
  );
};

export default CTA;
