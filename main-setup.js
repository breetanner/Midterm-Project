// debugger;

var budget;
var category;
var categoryName;
var totalSpent = 0; // probably dont need this
// var userBudgetInput;

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

function addCategories(categoryName) {
  categoryName = "Clothing";
  const cat1 = budget.addCategory(categoryName);
  categoryName = "Entertainment";
  const cat2 = budget.addCategory(categoryName);
  categoryName = "Bills";
  const cat3 = budget.addCategory(categoryName);
  categoryName = "Food";
  const cat4 = budget.addCategory(categoryName);
  return budget;
}

function checkDropdown() {
  var catInput = document.getElementById('category-dropdown').value;
  if (catInput === 'cat1') {
    budget.categories[0].addItem();
  } else if (catInput === 'cat2') {
    budget.categories[1].addItem();
  } else if (catInput === 'cat3') {
    budget.categories[2].addItem();
  } else if (catInput === 'cat4') {
    budget.categories[3].addItem();
  } else {
    console.log("Please select a category.") // make this a notification
  }
}


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
