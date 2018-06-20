//1번째 버전
/*const nextCharForNumberString = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};*/

//2번째 버전
/*const nextCharForNumberString = str =>
  String.fromCharCode(parseInt(str.trim()) + 1)*/

//3번째 버전
// const nextCharForNumberString = str =>
//   [str]
//     .map(s => s.trim())
//     .map(r => parseInt(r))
//     .map(i => i + 1)
//     .map(i => String.fromCharCode(i));

//4번째 버전
const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),  //박스로 안감싸고 함수만 적용하는 거네
    inspect: () => `Box(${x})`
  });

const nextCharForNumberString = str =>
  Box(str)
    .map(s => s.trim())
    .map(r => parseInt(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())

const result = nextCharForNumberString(' 64 ');

console.log(result);  //console.log가 inspect가 있는지 뒤져서 그게 있으면 그걸 콜하네 (재밌다)
// console.log(result.inspect());  //똑같은 결과