class Budget {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
    this.categories = [];
  }

  addCategory(categoryName) { // add feature so that user cannot add category if field box is empty
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

  removeCategory(category) { // cannot seem to get this to work
    this.categories = this.categories.filter(item => item !== category);
  }
}
