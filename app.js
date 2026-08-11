import { results } from "./data.js";

const flightList = document.querySelector("#flight-list");

flightList.innerHTML = results
  .map((item) => {
    const location = item.content.location;
    const flight = item.content.flightQuotes.cheapest;
    const image = item.content.image.url;

    return `
      <div class="flight-card">

        <img
          class="flight-image"
          src="${image}"
          alt="${location.name}"
        >

        <div class="flight-info">

          <div class="flight-header">
            <h2>${location.name}</h2>

            <span class="flight-price">
              ${flight.direct ? "Direct" : "With stop"}, ${flight.price} €
            </span>
          </div>

          <div class="flight-buttons">
            <button class="details-button">
              See more details
            </button>

            <button class="remove-button">
              Remove Flight
            </button>
          </div>

        </div>

      </div>
    `;
  })
  .join("");



  