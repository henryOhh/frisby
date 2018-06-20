const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),  //박스로 안감싸고 함수만 적용하는 거네
    inspect: () => `Box(${x})`
  });

//1번째 버전
/*const  moneyToFloat = str =>
  parseFloat(str.replace(/\$/g, ''));

const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '');
  const number = parseFloat(replaced);
  return number * 0.01;
}

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - cost * savings;
}*/

//2번째 버전 1분 30초
const  moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .fold(r => parseFloat(r));

const percentToFloat = str => {
  Box(str)
    .map(s => s.replace(/\%/g, ''))
    .map(r => parseFloat(r))
    .fold(n => n * 0.01);
};

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - cost * savings;
}

const result = applyDiscount('$5.00', '20%');
console.log(result);