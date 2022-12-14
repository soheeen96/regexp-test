const str = `
010-9418-6323.
thegmldms6323@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
`

console.log(
    str.match(/d$/gm)
)

console.log(
    str.match(/^t/gim)
)

console.log(
    str.match(/h..p/g)
) //h--p h로 시작하고 p로 끝나는 단어 모두 

console.log(
    str.match(/fox|dog/g)
) 

console.log(
    str.match(/https?/g)
) 