import React from "react";
// import Codewars from "https://www.codewars.com/users/Nathan%20Kandekore/badges/small";

export default function About() {
  return (
    <>
      <section className="skills">
        <div className="socials-icons">dummy text where icons will be</div>
        <div className="skills-icons">dummy text</div>
        {/* <img src={Codewars} alt="codewars-badge" /> */}
      </section>
      <section className="about-me">
        <div>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            pulvinar sem, id consectetur augue. Sed tempus, dolor eu aliquet
            faucibus, est magna consequat leo, at interdum mi sapien quis risus.
            Quisque ac commodo arcu, vel efficitur sem. Integer semper elementum
            commodo. Nulla hendrerit erat erat, quis fringilla dolor eleifend a.
            Aliquam leo orci, fermentum id nisi sed, iaculis iaculis augue.
            Praesent finibus, dui a accumsan pharetra, dui tortor mattis tortor,
            at egestas nulla dolor eget libero.
          </p>
        </div>
      </section>
    </>
  );
}
