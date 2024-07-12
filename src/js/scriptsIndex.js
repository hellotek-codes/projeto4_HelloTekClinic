import { data } from "./dataBase/docDatabase.js";

const cardsContainer = document.getElementById("cards_container");
const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");

function displayCards(data) {
  data.forEach((doctor) => {
    const li = document.createElement("li");
    li.classList.add("cards");

    if (doctor.id % 2 === 0) {
      li.style.borderLeft = "10px solid #e7649a";
    } else {
      li.style.borderLeft = "10px solid #0a81d1";
    }

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img_container");

    const img = document.createElement("img");
    img.src = doctor.img;
    imgContainer.appendChild(img);
    li.appendChild(imgContainer);

    const docDescription = document.createElement("div");
    docDescription.classList.add("doc_description");

    const descriptionTitle = document.createElement("div");

    const name = document.createElement("h2");
    name.textContent = doctor.drName;
    descriptionTitle.appendChild(name);

    const description = document.createElement("p");
    description.textContent = doctor.description;
    descriptionTitle.appendChild(description);

    const city = document.createElement("span");
    city.textContent = doctor.city;
    descriptionTitle.appendChild(city);

    docDescription.appendChild(descriptionTitle);

    const descriptionContact = document.createElement("div");

    const consultationFee = document.createElement("p");
    consultationFee.textContent = `Consultation Fee $ ${doctor.consultationFee}`;
    descriptionContact.appendChild(consultationFee);

    const contact = document.createElement("p");
    contact.textContent = `Contact: ${doctor.contact}`;
    descriptionContact.appendChild(contact);

    docDescription.appendChild(descriptionContact);

    li.appendChild(docDescription);

    cardsContainer.appendChild(li);
  });
}

displayCards(data);

searchButton.addEventListener("click", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".cards");

  let matchedCards = [];

  for (let i = 0; i < data.length; i++) {
    let name = data[i].drName.toLowerCase();
    let description = data[i].description.toLowerCase();
    let city = data[i].city.toLowerCase();

    if (
      name.includes(searchTerm) ||
      description.includes(searchTerm) ||
      city.includes(searchTerm)
    ) {
      matchedCards.push(data[i]);
    }
  }

  if (matchedCards.length !== 0) {
    cardsContainer.innerHTML = "";
    displayCards(matchedCards);
    clearTextInput();
  } else {
    alert("I'm sorry I couldn't find it. Please try again.");
    displayCards(data);
    clearTextInput();
  }
}

function clearTextInput() {
  let textInput = document.querySelector("#search_input");
  if (textInput != "") {
    textInput.value = "";
  }
}
