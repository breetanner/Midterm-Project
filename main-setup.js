// debugger;

var budget;
var category;
var categoryName;
var totalSpent = 0; // probably dont need this
// var userBudgetInput;

var cat1 = new Category("clothing");

window.addEventListener("load", () => {
  document.getElementById("budget-modal").style.display = "block";
  document.getElementById("budget-button").addEventListener("click", () => {
  createBudget();
  });
});

function createBudget() {
    const userBudgetInput = document.getElementById('budget-input').value;
    budget = new Budget(userBudgetInput);
    document.getElementById("budget-counter").innerText = "Total Budget: $" + userBudgetInput;
    document.getElementById("total-spent-counter").innerText = "Spent: " + totalSpent + " / " + userBudgetInput; // what if the user puts in a $?
    document.getElementById("budget-modal").style.display = "none";
    addCategories();
    return userBudgetInput;
}

function addCategories() {
  budget.addCategory("Clothing");
  budget.addCategory("Entertainment");
  budget.addCategory("Bills");
  budget.addCategory("Food");
}

function checkDropdown() {
<<<<<<< HEAD
  const catInput = document.getElementById('category-dropdown').value;
  if (catInput === 'clothing') {
    return budget.categories[0];
  } else if (catInput === 'entertainment') {
    return budget.categories[1];
  } else if (catInput === 'bills') {
    return budget.categories[2];
  } else if (catInput === 'food') {
    return budget.categories[3];
=======
  var catInput = document.getElementById('category-dropdown').value;
  if (catInput === 'cat1') {
    budget.categories[0].addItem();
  } else if (catInput === 'cat2') {
    budget.categories[1].addItem();
  } else if (catInput === 'cat3') {
    budget.categories[2].addItem();
  } else if (catInput === 'cat4') {
    budget.categories[3].addItem();
>>>>>>> bd57fd09a0b2547cf95744451da61962b70e4325
  } else {
    console.log("Please select a category.") // make this a notification
  }
}

<<<<<<< HEAD
function addItems() {
  var itemDesc = document.getElementById('item-description').value;
  var itemPrice = parseFloat(document.getElementById('item-price').value);
  var category = checkDropdown();
  category.addItem(itemDesc, itemPrice);  
  updateClothingSlider();
}

function updateClothingSlider() {
  document.getElementById("element").style.width = ((this.total()/this.totalBudget)/.01) + "%";
}

=======

function addToCategory(catInput) {
  var catInput = document.getElementById('category-dropdown').value;
  var itemDesc = document.getElementById('item-description').value;
  var itemPrice = document.getElementById('item-price').value;
  var itemDiv = document.createElement("div");
  if (catInput === 'cat1') {
    itemDiv.innerHTML = "<p>" + itemDesc + " $" + itemPrice + "</p>" + "<hr>";
    document.getElementById("cat1").appendChild(itemDiv);
  } else if (catInput === 'cat2') {
    itemDiv.innerHTML = "<p>" + itemDesc + " $" + itemPrice + "</p>" + "<hr>";
    document.getElementById("cat2").appendChild(itemDiv);
  } else if (catInput === 'cat3') {
    itemDiv.innerHTML = "<p>" + itemDesc + " $" + itemPrice + "</p>" + "<hr>";
    document.getElementById("cat3").appendChild(itemDiv);
  } else if (catInput === 'cat4') {
    itemDiv.innerHTML = "<p>" + itemDesc + " $" + itemPrice + "</p>" + "<hr>";
    document.getElementById("cat4").appendChild(itemDiv);
  } else {
    console.log("ERROR")
  }

  // itemDiv.innerHTML = "<p>" + itemDesc + " $" + itemPrice + "</p>" + "<hr>";
  // document.getElementById("cat1").appendChild(itemDiv);
}

// line.innerHTML = "<strong>" + name + ": </strong>"

// var li = document.createElement("li")

// Otherwise use these
// var itemDesc = document.getElementById('item-description').value;
// var itemPrice = document.getElementById('item-price').value;

// REFERENCES

// //Defining a listener for our button, specifically, an onclick handler
// document.getElementById("add").onclick = function() {
//     //First things first, we need our text:
//     var text = document.getElementById("idea").value; //.value gets input values
//
//     //Now construct a quick list element
//     var li = "<li>" + text + "</li>";
//
//     //Now use appendChild and add it to the list!
//     document.getElementById("list").appendChild(li);
// }
>>>>>>> bd57fd09a0b2547cf95744451da61962b70e4325
