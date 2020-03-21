'use strict';

let delivery = prompt('Для оформления доставки, введите название страны: ');

switch (delivery) {
    case 'Китай':
        let country = 'Китай';
        let credit = 100;
        break;
    case 'Чили':
        let country = 'Чили';
        let credit = 250;
        break;
    case 'Австралия':
        let country = 'Австралия';
        let credit = 170;
        break;
    case 'Индия':
        let country = 'Индия';
        let credit = 80;
        break;
    case 'Ямайка':
        let country = 'Ямайка';
        let credit = 120;
        break;
}

if (delivery === country) {
    alert('Доставка в ' + country + ' будет стоить ' + credit + ' кредитов');
} else {
    alert('В вашей стране доставка не доступна');
}