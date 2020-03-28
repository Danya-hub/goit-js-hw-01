'use strict'

let total = 100;  
let order = 10; 

order = total > order;
order && console.log('Заказ оформлен, с вами свяжется менеджер');

!order && console.log('На складе недостаточно товаров!');