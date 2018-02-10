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

}
