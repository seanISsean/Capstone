import html from "html-literal";

export default state => html`
  <section id="help">
    <div class="filter">
      <label>vin number</label>
      <input type="search" name="vin" id="vin" />
      <button id="search-button">Search</button>
    </div>
    <table id="vehicle">
      <tr>
        <th>VehicleTypeName</th>
        <th>Make_Name</th>
      </tr>
      ${Object.keys(state.vehicle)
        .map(
          feature =>
            `<tr><td>${feature}</td><td>${state.vehicle[feature]}</td></tr>`
        )
        .join("")}
    </table>
  </section>
`;

//forum like-asking questions, saving question
//comments
