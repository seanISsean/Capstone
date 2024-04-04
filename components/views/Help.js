import html from "html-literal";

export default state => html`
  <section id="help">
    <div class="filter">
      <select name="column" id="">
        <option value="">Select a column</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
        <option value="color">Color</option>
        <option value="customer">Customer</option>
      </select>
      <input type="search" name="filter" id="search" />
      <button id="search-button">Search</button>
    </div>
    <table id="vehicle">
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Customer</th>
      </tr>
      ${state.vehicle
        .map(vehicle => {
          return `<tr><td>${vehicle.make}</td><td>${vehicle.model}</td><td>${vehicle.year}</td><td>${vehicle.color}</td><td>${pizza.customer}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;

//forum like-asking questions, saving question
//comments
