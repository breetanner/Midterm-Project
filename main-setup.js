// debugger;

var budget;
var category;
var categoryName;
var totalSpent = 0;
var userBudgetInput;

window.addEventListener("load", () => {
  document.getElementById("budget-modal").style.display = "block";
  document.getElementById("budget-button").addEventListener("click", () => {
  createBudget();
  });
});

function createBudget(userBudgetInput) {
    var userBudgetInput = document.getElementById('budget-input').value;
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


function addItem(userBudgetInput) {
  var itemDesc = document.getElementById('item-description').value;
  var itemPrice = document.getElementById('item-price').value;
  totalSpent = (totalSpent + itemPrice); // still returning as a string
  document.getElementById("total-spent-counter").innerText = "Spent: " + totalSpent + " / " + userBudgetInput;
}

// var category = new Category("test", 200);
//
// var budget = new Budget(1000);
//

//
// cat1.addItem("rent", 400);
// cat2.addItem("food", 500);
// cat2.addItem("cookies", 100);
