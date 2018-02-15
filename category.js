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


// budget.categories[1] // accesses entertainment array
// budget.categories[1].addItem() // adds Item to array

// maybe make a loop that asks when the user drop down = cat1
