const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

function changeHeading() {
  heading.innerHTML = "Updated heading";
}

changeHeading();

// Question 3

function changeSize() {
  heading.style.fontSize = "2em";
}

changeSize();

// Question 4

function addSubHeading() {
  heading.className = "subheading";
}

addSubHeading();

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function kittens(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

kittens(cats);

// Question 8

function createCats(cats) {
  let item = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    item += `<div>
              <h5>${cats[i].name}</h5>
              <p>${catAge}</p>
              </div>`;
  }

  return item;
}

const newHtml = createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
