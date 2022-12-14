const str = `
010-9418-6323
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`

const regex = /fox/gi 

//console.log(regex.test(str)) 
console.log(str.replace(regex, 'AAA')) //원본 손상X
console.log(str) 