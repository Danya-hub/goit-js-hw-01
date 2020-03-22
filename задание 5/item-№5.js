'use strict';

let country, credit = 0;
const delivery = prompt('Для оформления доставки, введите название страны: ');

switch (delivery.toLowerCase()) {
    case 'китай':
        credit = 100;
        alert(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
        break;
    case 'кили':
        credit = 250;
        alert(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
        break;
    case 'австралия':
        credit = 170;
        alert(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
        break;
    case 'индия':
        credit = 80;
        alert(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
        break;
    case 'ямайка':
        credit = 120;
        alert(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}