'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Woo Dong Jin Co.',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let sortToggle = true;
const sortBy = function() {
  let newMov;
  if (sortToggle) {
     newMov = accounts.at(0).movements.slice().sort(function(a, b) {
      return b - a;
    });
    sortToggle = false;
  } else {
    newMov = accounts.at(0).movements;
    sortToggle = true;
  }

  document.querySelectorAll('.movements__row')
    .forEach( v => v.remove());
  // document.createElement('div').className ='movements';
  displayMovements(newMov);
}
const displayMovements = function(movements) {
  const movementsEl = document.querySelector('.movements');
  const selectDeWith = (v) => v > 0 ? 'deposit' : 'withdrawal';

  movements.forEach((mov, idx, arr) => {
    const movementsRow = document.createElement('div');
    movementsRow.className = 'movements__row';
    const movementsType = document.createElement('div');
    movementsType.className = 'movements__type';
    const movementsValue = document.createElement('div');
    movementsValue.className = 'movements__value';
    const movementsDate = document.createElement('div');
    movementsDate.className = 'movements__date';

    movementsType.classList.add(`movements__type--${selectDeWith(mov)}`);
    movementsType.innerHTML = `${idx + 1} ${selectDeWith(mov)}`;
    movementsDate.innerHTML = `${new Date().getDate()} DAYS AGO`;
    movementsValue.innerHTML = `${Math.abs(mov)} ${selectDeWith(mov)}`;

    movementsEl.appendChild(movementsRow);

    movementsRow.appendChild(movementsType);
    movementsRow.appendChild(movementsDate);
    movementsRow.appendChild(movementsValue);
  });
};

displayMovements(accounts.at(0).movements);

const totalBalance = accounts.at(0).movements.reduce((acc, curr) => acc + curr);

document.querySelector('.date').innerHTML = new Date().toLocaleDateString();
document.querySelector('.balance__value').innerHTML =
  `${totalBalance} €`;
const summaryMovements = function(movements) {
  const summaryValue = document.querySelector('.summary__value');
  let deposit = 0;
  let withdrawal = 0;
  movements.forEach((mov, idx, arr) => {
    mov > 0 ? deposit += mov : withdrawal += mov;
  })
  document.querySelector('.summary__value--in').innerHTML = `${deposit} €`;
  document.querySelector('.summary__value--out').innerHTML = `${Math.abs(withdrawal)} €`;
  const interestValue = ((deposit + withdrawal)*account1.interestRate/100).toFixed(2);
  document.querySelector('.summary__value--interest').innerHTML =`${interestValue} €`;
};
summaryMovements(accounts.at(0).movements);

//현재 시간 (sec)
let currentSecond = 10;
//타이머 변수
let playTimer;

setInterval(() => {
  currentSecond = currentSecond - 1;
  if(currentSecond === 0){
    console.log('땡!');
    clearInterval(playTimer);
  }
  console.log(currentSecond + '초 남았습니다');
},1000)


/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];*/

// SLICE 는 원본을 유지
/*let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'z'];
console.log(arr.slice(2), arr.slice(1,4), arr.slice(-2))
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr]);

/// SPLICE => 원본을 바꿈
// console.log(arr.splice(2)); // delete original arrays
arr.splice(-1); // 마지막 것 제거
console.log(arr);

const months = ['Jan', 'March', 'April', 'June'];
console.log(months)
months.splice(1, 0, 'Feb'); // index 1에 추가
// Inserts at index 1
console.log(months);

months.splice(4, 1, 'May'); // index 4 교체
// Replaces 1 element at index 4
console.log(months);

// console.log(months.reverse())
// console.log(months);
const concatArr =arr.concat(months)
console.log(concatArr)
// console.log(arr)
console.log([...arr, ...months])
console.log(concatArr.join(' - '));
console.log(months.at(0));

// getting the last element.
console.log(months[ months.length-1 ])
console.log(months.slice(-1)[0]);
console.log(months.at(-1));
console.log('wookim'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];*/
//
// movements.forEach(function (value, index, arr) {
//   if(value > 0) console.log(`You deposited ${value} : ${index +1}번째`);
//   else console.log(`You withdrew ${Math.abs(value)} : ${index +1}번째`)
//   // console.log(arr.length)
// })

