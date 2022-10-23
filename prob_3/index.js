"use strict";
/---------------------- Create Types to recicle code ----------------------/;
/---------------------- An astract class to set the body of the class Pizza and to asign to the final objects ----------------------/;
class pizzaTemplate {
    genCost() {
        let cost = 0;
        if (this._size === "small") {
            cost = 10 + ((2 * (this._pepAmount)) + (2 * (this._hamAmount)) + (2 * (this._pinAmount)));
            if (this._extCheese === "yes") {
                cost += 2;
            }
        }
        else if (this._size === "medium") {
            cost = 12 + ((2 * (this._pepAmount)) + (2 * (this._hamAmount)) + (2 * (this._pinAmount)));
            if (this._extCheese === "yes") {
                cost += 4;
            }
        }
        else if (this._size === "large") {
            cost = 14 + ((3 * (this._pepAmount)) + (3 * (this._hamAmount)) + (3 * (this._pinAmount)));
            if (this._extCheese === "yes") {
                cost += 6;
            }
        }
        else if (this._size === "extra-large") {
            cost = 18 + ((4 * (this._pepAmount)) + (4 * (this._hamAmount)) + (4 * (this._pinAmount)));
            if (this._extCheese === "yes") {
                cost += 6;
            }
        }
        /--------------------------Just for visual help--------------------------/;
        console.log(`The final cost of the order ${this._order} is: ${cost}`);
        return cost;
    }
    set size(newSize) {
        this._size = newSize;
    }
    set pepAmount(newpepAmount) {
        this._pepAmount = newpepAmount;
    }
    set hamAmount(newhamAmount) {
        this._hamAmount = newhamAmount;
    }
    set pinAmount(newpinAmount) {
        this._pinAmount = newpinAmount;
    }
    set extCheese(invertCheesePet) {
        this._extCheese = invertCheesePet;
    }
    get size() {
        return this._size;
    }
    get pepAmount() {
        return this._pepAmount;
    }
    get hamAmount() {
        return this._hamAmount;
    }
    get pinAmount() {
        return this._pinAmount;
    }
    get extCheese() {
        return this._extCheese;
    }
}
/---------------------- Create a class called Pizza ----------------------/;
class Pizza extends pizzaTemplate {
    constructor(size, pepAmount, hamAmount, pinAmount, extCheese) {
        super();
        this._size = size;
        this._pepAmount = pepAmount;
        this._hamAmount = hamAmount;
        this._pinAmount = pinAmount;
        this._extCheese = extCheese;
        this._order = ++Pizza.order;
    }
}
Pizza.order = 0;
const pedido1 = new Pizza("small", 1, 1, 1, "yes");
pedido1.genCost();
pedido1.hamAmount = 10;
pedido1.pepAmount = 5;
pedido1.pinAmount = 5;
pedido1.genCost();
const pedido2 = new Pizza("medium", 1, 1, 1, "yes");
pedido2.genCost();
pedido2.extCheese = "no";
pedido2.genCost();
const pedido3 = new Pizza("large", 1, 1, 1, "yes");
pedido3.genCost();
const pedido4 = new Pizza("extra-large", 1, 1, 1, "yes");
pedido4.genCost();
