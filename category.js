


class Category {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(name, price) {
        this.item = new Item(name, price);
        this.items.push(this.item);
        console.log(this.items);
    }

    catTotal() {
        var sum = 0;
        this.items.forEach(item => {
        sum = sum + item.price;
        console.log(sum);
      });
      return sum;
    }





    // addItems() {
    //     for(var i = 0; i < this.items.length; i++) {

    //     }
    // }
}
