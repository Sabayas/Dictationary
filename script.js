const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const sound = document.getElementById("sound")

button.addEventListener("click", function() {
    let inpword = document.getElementById("input").value;
    fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) => {console.log(data);
    result.innerHTML =  `<div class="word">
          <h3>${inpword}</h3>
          <button onclick ="playSound()"><i class="fa-solid fa-music"></i></button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech[0]}</p>
          <p>/${data[0].meanings[0].partOfSpeech}/</p>
        </div>
        <p class="word-meaning">
           ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">${data[0].meanings[1].definitions[0].definition}</p>`
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);
    })
    .catch(() => {
        result.innerHTML = `<h3 class ="error">Couldn't Find The word</h3>`;
    });
});

function playSound(){
    sound.play();
}