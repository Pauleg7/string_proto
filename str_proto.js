'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// Задание № 1
console.log('===== Задание № 1 =====');

function fixAmount(amount) {
  if (amount.toString().search(/\d+/) !== -1) {
    return amount.toString().trim().replace(',', '.').match(/\d+/g).join('.');
  } else {
    return -1;
  }
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

// Задание № 2
console.log('===== Задание № 2 =====')

function getSecretCode() {
  let result = '';
  return function(char) {
    result = result.concat(char.toLowerCase())
    if (result.slice(-4) == 'r2d2') {
      showSpecialPrice();
      result = '';
    }
  }
}

const handleKey = getSecretCode();

var keys = ['2', '4', 'R', '2', 'd', '2'];

for (let key of keys) {
  handleKey(key);
}

// Задание № 3
console.log('===== Задание № 3 =====')

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);

function parseData(listKey, products) {
  let productsArr = [];

  for (let product of products) {
    let result = product.split(',').map((item) => {
      return item.trim();
    });

    let objProduct = {};

    for (let i = 0; i < result.length; i++) {
      objProduct[listKey[i]] = result[i];
    }

    productsArr.push(objProduct);
  }
  return productsArr;
}