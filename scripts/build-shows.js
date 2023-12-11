const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createShows(shows) {
  const showContainer = document.createElement("div");
  showContainer.classList.add("upcoming-shows__containers");

  const miniContainer = document.createElement("div");
  miniContainer.classList.add("upcoming-shows__containers__mini");
  showContainer.appendChild(miniContainer);

  const showDate = document.createElement("p");
  showDate.classList.add("upcoming-shows__containers--titles");
  showDate.innerText = "Date";
  miniContainer.appendChild(showDate);

  const showDate2 = document.createElement("p");
  showDate2.classList.add("upcoming-shows__containers--titles-sub");
  showDate2.innerText = shows.date;
  miniContainer.appendChild(showDate2);
  /////
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
  showVenue2.innerText = shows.venue;
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
  showLocation2.innerText = shows.location;
  miniContainer3.appendChild(showLocation2);

  const button = document.createElement("button");
  button.classList.add("upcoming-shows__containers--button");
  button.innerText = "BUY TICKETS";
  showContainer.append(button);

  return showContainer;
}

function renderShows() {
  const showsWrapper = document.querySelector(".javascript-shows");
  showsWrapper.innerHTML = "";

  for (let i = 0; i < showsArray.length; i++) {
    const showCard = createShows(showsArray[i]);
    showsWrapper.appendChild(showCard);
  }
}

renderShows();
