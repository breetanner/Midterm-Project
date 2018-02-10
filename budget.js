class Budget {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
    this.categories = [];
  }

  addCategory(name) {
    var category = new Category(name);
    this.categories.push(category);
    console.log(this.categories);
    console.log(category);
    return category;
  }

  total() {
    var sum = 0;
    this.categories.forEach(category => {
      sum = sum + category.total();
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
