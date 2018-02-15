class Category {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(name, price) {
    var itemDesc = document.getElementById('item-description').value;
    var itemPrice = document.getElementById('item-price').value;
    var item = new Item(itemDesc, itemPrice);
    this.items.push(item);
    console.log(this.items);
    return item;
  }

  total() {
    var sum = 0;
    this.items.forEach(item => {
      sum === sum + item.price;
      console.log(sum);
    });
    return sum;
  }
}

// NEED TO USE SOME OF THIS FOR MATH DOM MANIPULATION ------
//   totalSpent = (totalSpent + itemPrice); // still returning as a string // change this to a smaller function called updateTotal()
//   document.getElementById("total-spent-counter").innerText = "Spent: " + totalSpent + " / " + userBudgetInput;
// }
