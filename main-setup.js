// var category = new Category("test", 200);
//
// var budget = new Budget(1000);
//
// var cat1 = budget.addCategory("mnhkyv", 40);
// var cat2 = budget.addCategory("clothing", 40);
//
// cat1.addItem("rent", 400);
// cat2.addItem("food", 500);
// cat2.addItem("whiskey", 1000);


var budget;
var category;
var categoryName;

function createBudget() { // function run on 'set budget' button click, TEMP for testing type value into input box and type createBudget function into concole
  var userBudgetInput = document.getElementById('budget-input').value;
  budget = new Budget(userBudgetInput);
}
