function displayPoem(response) {
  console.log(response.data.answer);
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "52b8211ebf3ae3d722a0780tdeof04f0";
  let prompt = `Generate a poem about ${instructionInput.value}`;
  let context =
    "You are an AI assistant who also happens to be a poetry vitruoso. You specialize in clever 3 stanza poems which make use of varying literary devices. You never tell the same poem twice. Your poems should be displayed in basic HTML and separated with a <br />. Make sure not to include the term 'html' or special characters in your text";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-box");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a 3 stanza poem about ${instructionInput.value}</div>`;
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
