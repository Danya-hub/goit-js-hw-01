'use strict';

let credits = 23580;
let pricePerDroid = 3000;

let quantityDroid = prompt('Какое количество дроидов вы хотите купить?');

 if (quantityDroid === null) {
    alert('Отменено пользователем!');
} else {
    let totalPrice = Number(quantityDroid) * pricePerDroid;
    if (credits < totalPrice) {
        alert('Недостаточно средств на счету!');
    } else {
        totalPrice = credits - totalPrice;
        alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${totalPrice} кредитов`);
    }
}