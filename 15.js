const Jokeload = document.querySelector('#Joke');
const Refresh = document.querySelector('#Refresh');

const Newjoke = () => {

    const setHeader = {
        headers:{
            Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/' , setHeader).then((res) => res.json() )
    .then((data) => {
        Jokeload.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
}

Refresh.addEventListener('click', Newjoke);
Newjoke();