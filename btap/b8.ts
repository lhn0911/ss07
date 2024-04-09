let book = {
    title: "A",
    author: "Me",
    price: 15,
    printBook() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`);
    },
    updateBook(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};
book.printBook();
book.updateBook("Dragon Ball", "Toriyama Akira", 12.99);
book.printBook();
