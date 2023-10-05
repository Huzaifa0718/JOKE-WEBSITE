

value = document.getElementById("joke");

let getJoke = ()  => {
let p = fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single")
p.then((response) => response.json())
// .then( item => console.log(item))
  .then( item => value.textContent = `${item.joke}`)
}
 // getJoke();