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

    // addItems() {
    //     for(var i = 0; i < this.items.length; i++) {
            
    //     }
    // }    
}