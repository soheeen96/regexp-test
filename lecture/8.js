const str = `
010-9418-6323.
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
동해물과_백두산이 마르고 닳도록
`

console.log(
    str.match(/\w/g)
)

console.log(
    str.match(/\bf\w{1,}\b/g)
) //소문자 f 로 시작하는 모든 영단어 찾기가 됨

console.log(
    str.match(/\d{1,}/g)
)

const h = `  the hello  world       !

`

console.log(
    h.replace(/\s/g, '')
)