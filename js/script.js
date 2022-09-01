// Question 1
// Give the below function's name parameter a default value of "John"

function greet(name = "John") {
  return `Hello ${name}!`;
}

// Question 2
// Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
// The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

function create(classn, value) {
  const html = `<div class="${classn}">${value}</div>`;
  return html;
}

const container = document.querySelector(".hello");

container.innerHTML = create("nope", "Hi");

// Question 3:
// Convert the below API call to use a try-catch-finally statement.

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[2].text);
    console.log("no error here");
  } catch (error) {
    console.log("there is an error here", error);
  } finally {
    console.log("done");
  }
}
getFact();
