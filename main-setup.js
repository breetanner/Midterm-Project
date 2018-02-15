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

// This is kinda a repeat function

// function addItem(userBudgetInput) {
//   var itemDesc = document.getElementById('item-description').value;
//   var itemPrice = document.getElementById('item-price').value;
//   totalSpent = (totalSpent + itemPrice); // still returning as a string // change this to a smaller function called updateTotal()
//   document.getElementById("total-spent-counter").innerText = "Spent: " + totalSpent + " / " + userBudgetInput;
// }

function checkDropdown() {
  debugger;
  const catInput = document.getElementById('category-dropdown').value;
  if (catInput === 'cat1') {
    budget.categories[0].addItem();
  } else if (catInput === 'cat2') {
    budget.categories[1].addItem();
  } else if (catInput === 'cat3') {
    budget.categories[2].addItem();
  } else if (catInput === 'cat4') {
    budget.categories[3].addItem();
  } else {
    console.log("Please select a category.")
  }
}




// var category = new Category("test", 200);
//
// var budget = new Budget(1000);
//

//
// cat1.addItem("rent", 400);
// cat2.addItem("food", 500);
// cat2.addItem("cookies", 100);
