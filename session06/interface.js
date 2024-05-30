"use strict";
class Rikkei {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
    }
}
class RiikeiAcademy {
    constructor(name) {
        this.name = name;
    }
    getName() { }
}
let cart = [];
class Binh {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getProduct() {
        console.log("lấy sản phẩm");
    }
}
let binh = new Binh(1, "binh tommy");
binh.getProduct();
class Son {
    getName() {
        console.log("hello son!");
    }
}
