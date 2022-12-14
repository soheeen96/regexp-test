const str = `
010-9418-6323
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The hello world the lazy dog
abbcccdddd
`
//g > '' 안에 있는 모든 걸 검색
//i > 대소문자 구분없이 검색
const regex1 = new RegExp('the', 'gi') //생성자 방식
const regex2 = /the/gi //리터럴 방식

console.log(str.match(regex1))
console.log(str.match(regex2))