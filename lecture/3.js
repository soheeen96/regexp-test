const str = `
010-9418-6323.
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regex = /the/gi
// console.log(str.match(regex))
// 아래 코드로 대체 가능
//console.log(str.match(/the/gi))

console.log(str.match(/\.$/gim))
// \ : . 같은 경우, 마침 기능이 아닌 . 문자로 해석 될 수 있게 상태 바꿈
// m : 각각 줄을 하나의 시작과 끝으로 보겠다로 해석