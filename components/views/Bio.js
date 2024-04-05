import html from "html-literal";
import vehicleuphigh from "../../Images/IMG_8458.jpg";
import vehiclefront from "../../Images/IMG_8459.png";
export default () => html`
  <section id="bio">
    <h1>About Me</h1>
    <img src="${vehicleuphigh}" alt="me" width="300" height="300" border="5" />
    <img src="${vehiclefront}" height="300" width="300" border="5" />
    <p>
      From reading popular science magazines, to now learning to code
    </p>
  </section>
`;
