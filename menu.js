// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, item) {
  var ans = prompt(questionText);
  if(ans.toUpperCase() === "YES")
  {
  order = order + " " +  item.toUpperCase();
  }

}

// call the QUESTION function with the order options
question(" Would you like white rice?", "white rice");
question("would you like brown rice?", "brown rice");
question(" would you like black beans?", "black beans");
question("would you like pinto beans?", "pinto beans");
question("Would you like chicken? ", "chicken");
question("Would you like steak? ", "steak");
question("Would you like pork?", "pork");
question("Would you like mild salsa?", "mild salsa");
question("Would you like medium salsa?", "medium salsa");
question("Would you like hot salsa?", "hot salsa");
question("Would you like guac", "guac");
question("Would you like a soda?", " soda");
question("Would you like water?", "water");



// output their order
document.write("<p>You ordered a burrito with: " + order + "<p>");
