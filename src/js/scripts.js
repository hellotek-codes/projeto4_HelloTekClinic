import { data } from "./dataBase/docDatabase.js";

const cardsContainer = document.getElementById("cards_container");

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
  consultationFee.textContent = `Consulta R$ ${doctor.consultationFee}`;
  descriptionContact.appendChild(consultationFee);

  const contact = document.createElement("p");
  contact.textContent = `Contato: ${doctor.contact}`;
  descriptionContact.appendChild(contact);

  docDescription.appendChild(descriptionContact);

  li.appendChild(docDescription);

  cardsContainer.appendChild(li);
});
