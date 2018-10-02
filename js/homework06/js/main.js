'use strict'
class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            return this
                ._toppings
                .push(topping);
        } else {
            return console.log(`данный топинг ${topping} уже есть, выберите другой`);
        }
    }

    removeTopping(topping) {
        if (this._toppings.includes(topping)) {
            return this._toppings = this._toppings.filter(item => item !== topping);
        } else {
            return console.log('Такой топпинг вы не добавляли!');
        }
    }

    get getToppings() {
        return this._toppings;
    }

    get getSize() {
        return this._size;
    }

    get getStuffing() {
        return this._stuffing;
    }

    get calculatePrice() {
        if (this._toppings.length === 0) {
            return Number(
                Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price
            );
        } else {
            const summSous = Number(
                Object.keys(this._toppings).reduce((acc, item) => acc + (Hamburger.TOPPINGS[this._toppings[item]].price), 0)
            );
            return Number(
                Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price +
                summSous
            );
        }
    }

    get calculateCalories() {
        if (this._toppings.length === 0) {
            return Number(
                Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories
            );
        } else {
            const summCal = Number(
                Object.keys(this._toppings).reduce((acc, item) => acc + (Hamburger.TOPPINGS[this._toppings[item]].calories), 0)
            );
            return Number(
                Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories +
                summCal
            );
        }
    }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100
    }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15
    }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5
    }
};

const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories);

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice);

console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1

// Добавка из приправы hamburger.addTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger);  Спросим сколько там калорий  console.log("Calories:
// ", hamburger.calculateCalories);  Сколько стоит? console.log("Price: ",
// hamburger.calculatePrice);  Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE); console.log(hamburger);   А
// сколько теперь стоит? console.log("Price with sauce: ",
// hamburger.calculatePrice);
// console.log(Hamburger.TOPPINGS[hamburger._toppings[0]].price +
// Hamburger.TOPPINGS[hamburger._toppings[1]].price);  hamburger._toppings[1]
// Hamburger.TOPPINGS.TOPPING_SAUCE.price
// Hamburger.TOPPINGS[hamburger._toppings[0]].price
