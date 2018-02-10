var category = new Category("test", 200);

var budget = new Budget(1000);

var cat1 = budget.addCategory("mnhkyv", 40);
var cat2 = budget.addCategory("clothing", 40);

cat1.addItem("rent", 400);
cat2.addItem("food", 500);
cat2.addItem("whiskey", 1000);
