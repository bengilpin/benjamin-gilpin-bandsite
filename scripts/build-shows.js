import BandSiteApi from "./band-site-apis.js";

const api_key = "3d55f80c-bb2b-4ddf-b49f-e9d0c361702f";

const showsData = new BandSiteApi(api_key);

document.addEventListener("DOMContentLoaded", async function () {
  function createShows(show) {
    const showContainer = document.createElement("div");
    showContainer.classList.add("upcoming-shows__containers");

    const miniContainer = document.createElement("div");
    miniContainer.classList.add("upcoming-shows__containers__mini");
    showContainer.appendChild(miniContainer);

    const showTime = document.createElement("p");
    showTime.classList.add("upcoming-shows__containers--titles");
    showTime.innerText = "Date";
    miniContainer.appendChild(showTime);

    const showTime2 = document.createElement("p");
    showTime2.classList.add("upcoming-shows__containers--titles-sub");
    const formattedDate = new Date(show.date);
    showTime2.innerText = formattedDate.toLocaleString();
    miniContainer.appendChild(showTime2);

    const miniContainer2 = document.createElement("div");
    miniContainer2.classList.add("upcoming-shows__containers__mini");
    showContainer.appendChild(miniContainer2);

    const showVenue = document.createElement("p");
    showVenue.classList.add("upcoming-shows__containers--titles");
    showVenue.innerText = "Venue";
    miniContainer2.appendChild(showVenue);

    const showVenue2 = document.createElement("p");
    showVenue2.classList.add(
      "upcoming-shows__containers--titles--venue-location"
    );

    showVenue2.innerText = show.place;
    miniContainer2.appendChild(showVenue2);
    //////
    const miniContainer3 = document.createElement("div");
    miniContainer3.classList.add("upcoming-shows__containers__mini");
    showContainer.appendChild(miniContainer3);

    const showLocation = document.createElement("p");
    showLocation.classList.add("upcoming-shows__containers--titles");
    showLocation.innerText = "Location";
    miniContainer3.appendChild(showLocation);

    const showLocation2 = document.createElement("p");
    showLocation2.classList.add(
      "upcoming-shows__containers--titles--venue-location"
    );
    showLocation2.innerText = show.location;
    miniContainer3.appendChild(showLocation2);

    const button = document.createElement("button");
    button.classList.add("upcoming-shows__containers--button");
    button.innerText = "BUY TICKETS";
    showContainer.appendChild(button);

    return showContainer;
  }

  async function renderShows() {
    const showsWrapper = document.querySelector(".javascript-shows");
    showsWrapper.innerHTML = "";

    try {
      const showDatas = await showsData.getShows();
      for (let i = 0; i < showDatas.length; i++) {
        const showCard = createShows(showDatas[i]);
        showsWrapper.appendChild(showCard);
      }
    } catch (error) {
      console.error("render shows not workign");
    }
  }
  renderShows();
});
