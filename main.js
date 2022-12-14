const str = `
010-9418-6323.
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
    str.match(/.{1,}(?=@)/g)
)

console.log(
    str.match(/(?<=@).{1,}/g)
)