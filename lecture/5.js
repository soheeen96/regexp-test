const str = `
010-9418-6323.
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
`

console.log(
    str.match(/d{2}/g)
)

console.log(
    str.match(/d{2,}/g)
)

console.log(
    str.match(/d{2,3}/g)
)