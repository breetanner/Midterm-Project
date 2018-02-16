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
  const catInput = document.getElementById('category-dropdown').value;
  if (catInput === 'clothing') {
    return budget.categories[0];
  } else if (catInput === 'entertainment') {
    return budget.categories[1];
  } else if (catInput === 'bills') {
    return budget.categories[2];
  } else if (catInput === 'food') {
    return budget.categories[3];
  } else {
    console.log("Please select a category.")
  }
}

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

