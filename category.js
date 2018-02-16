class Category {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(name, price) {
    var item = new Item(name, price);
    this.items.push(item);
    console.log(this.items);
    addToCategory();
    return item;
  }

  total() {
    var sum = 0;
    this.items.forEach(item => {
      sum = sum + item.price;
      console.log(sum);
    });
    return sum;
  }

  render() {
    console.log(category.name);
    $("#cat1").innerText = category.name;
  }

  updateClothingSlider() {
    this.style.width = ((this.total()/this.totalBudget)/.01) + "%";
  }
  
}

// NEED TO USE SOME OF THIS FOR MATH DOM MANIPULATION ------
//   totalSpent = (totalSpent + itemPrice); // still returning as a string // change this to a smaller function called updateTotal()
//   document.getElementById("total-spent-counter").innerText = "Spent: " + totalSpent + " / " + userBudgetInput;
// }
