'use strict'

let total = 100;  
let order = 100; /*  Почему при указании двух одинаковых чисел,
                     число переменной order всё равно больше?  */

order = total > order;
order && console.log('Заказ оформлен, с вами свяжется менеджер');

!order && console.log('На складе недостаточно товаров!');