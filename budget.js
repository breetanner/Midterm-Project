class Budget {
  constructor(totalBudget) {
    this.totalBudget = totalBudget;
    this.categories = [];
  }

  addCategory(categoryName) {
    // EXTRA ---
    // don't need this now that we are not having users make categories
    // categoryName = document.getElementById('category-name-input').value;
    const category = new Category(categoryName);
    this.categories.push(category);
    return category;
  }

  total() {
    var sum = 0;
    this.categories.forEach(category => {
      sum = sum + category.total();
    });
    return sum;
  }

  totalRemaining() {
    var totalRemain = this.totalBudget - this.total();
    var percentage = ((this.total() / this.totalBudget) * 100);
    console.log(percentage);
    console.log(totalRemain);
    if(percentage >= 100) {
      return "STOP";
    }else if(percentage <= 80) {
      console.log(percentage);
      return "#green";
    }else if(percentage <= 60) {
      console.log(percentage);
      return "#orange";
    } else {
      return "#red";
    }
  }
}
