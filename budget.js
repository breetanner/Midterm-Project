class Budget {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
    this.categories = [];
  }

  // addCategory(name) { // What is name doing here?
  //   var category = new Category(name);
  //   this.categories.push(category);
  //   console.log(this.categories);
  //   console.log(category);
  //   return category;
  // }

  addCategory(category) { // Changed to pass in cateogryNamw variable
    var categoryName = document.getElementById('category-name-input').value; // TEMP for testing type value into input box and type budget.addCategory function into console, then type a new category and run budget.addCategory again, successfully adds to array!!!
    category = new Category(categoryName);
    this.categories.push(category);
    console.log(this.categories);
    // console.log(category);
    // return category;
  }

  total() { // this is adding the sums to the end of each other like a string (i.e. I had two items one at 50 and one at 10 and it logged 050100)
    var sum = 0;
    this.categories.forEach(category => {
      sum = (sum + category.total());
      console.log(sum);
    });
    return sum;
  }

  totalRemaining() {
    var percentage = ((this.total() / this.totalPrice) * 100);
    console.log(percentage);
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
