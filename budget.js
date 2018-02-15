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
      console.log(sum);
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

// EXTRA ---
  removeCategory(category) { // cannot seem to get this to work
    this.categories = this.categories.filter(item => item !== category);
  }

  eachCatetory() {
    this.categories = this.categories
  }



  updateCategorySlider() {
    document.getElementById("entertainment").style.width = (this.entertainmentPercent()).toString() + "%";
    document.getElementById("food").style.width = (this.foodPercent()).toString() + "%";
    //document.getElementById("clothing").style.width = (this.clothingPercent()).toString() + "%";
    //document.getElementById("bills").style.width = (this.billsPercent()).toString() + "%";
  }

  entertainmentPercent() {
    return (350/this.totalBudget)/.01;
    //return (this.total()/this.totalBudget)/.01;
  }

  foodPercent() {
    return (250/this.totalBudget)/.01;

  }

  /*  clothingPercent() {
  return (this.total()/this.totalBudget)/.01;

}

billsPercent() {
return (this.total()/this.totalBudget)/.01;

} */



}
