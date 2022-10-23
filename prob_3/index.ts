/---------------------- Create Types to recicle code ----------------------/
type Sizes = "small" | "medium" | "large" | "extra-large";
type ExtraCheese = "yes" | "no";

/---------------------- An astract class to set the body of the class Pizza and to asign to the final objects ----------------------/
abstract class pizzaTemplate {
    abstract _size: Sizes;
    abstract _pepAmount: number;
    abstract _hamAmount: number;
    abstract _pinAmount: number;
    abstract _extCheese: ExtraCheese;
    abstract _order: number;
    // Public method to generate the cost of each order
    genCost(): number {
        let cost: number = 0;
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
        /--------------------------Just for visual help--------------------------/
        console.log(`The final cost of the order ${this._order} is: ${cost}`)

        return cost
    }

    // Setters
    set size(newSize: Sizes) {
        this._size = newSize;
    }

    set pepAmount(newpepAmount: number) {
        this._pepAmount = newpepAmount;
    }

    set hamAmount(newhamAmount: number) {
        this._hamAmount = newhamAmount;
    }

    set pinAmount(newpinAmount: number) {
        this._pinAmount = newpinAmount
    }

    set extCheese(invertCheesePet: ExtraCheese) {
        this._extCheese = invertCheesePet;
    }


    // Getters
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
        return this._extCheese
    }

}

/---------------------- Create a class called Pizza ----------------------/
class Pizza extends pizzaTemplate {
    _size: Sizes;
    _pepAmount: number;
    _hamAmount: number;
    _pinAmount: number;
    _extCheese: ExtraCheese;
    _order: number;
    constructor(size: Sizes, pepAmount: number, hamAmount: number, pinAmount: number, extCheese: ExtraCheese) {
        super()
        this._size = size;
        this._pepAmount = pepAmount;
        this._hamAmount = hamAmount;
        this._pinAmount = pinAmount;
        this._extCheese = extCheese;
        this._order = ++Pizza.order;
    }
    // Variable to see the order number
    static order: number = 0;

}


const pedido1 = new Pizza("small", 1, 1, 1, "yes");
pedido1.genCost();
pedido1.hamAmount = 10;
pedido1.pepAmount = 5;
pedido1.pinAmount = 5;
pedido1.genCost();

const pedido2 = new Pizza("medium", 1, 1, 1, "yes");
pedido2.genCost();
pedido2.extCheese = "no"
pedido2.genCost();

const pedido3 = new Pizza("large", 1, 1, 1, "yes");
pedido3.genCost();

const pedido4 = new Pizza("extra-large", 1, 1, 1, "yes");
pedido4.genCost();