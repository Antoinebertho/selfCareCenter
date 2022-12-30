let answerContainer = document.querySelector(".answer-container");
let randomText = document.querySelector(".random-text");
let meditationImg = document.querySelector(".meditation-image");
let buttonMessage = document.querySelector(".button-1");
let buttonClear = document.querySelector(".button-suppression");

let affirmations = [
  "Je suis heureux et en pleine forme.",
  "J’ai une hygiène de vie équilibrée et je prends soin de moi.",
  "Je mérite d’être heureux.",
  "Je fais ce que j’ai à faire quand ça doit être fait.",
  "Je permets à la douleur de venir et de repartir comme les vague de la mer.",
  "La nourriture saine est pour moi une source de plaisir.",
  "J'agis en accord avec mes valeurs.",
  "Chaque jour, je me lève pour vivre la vie de mes rêves !",
  "Je m’aime tel que je suis et me concentre sur mes qualités.",
  "L’imagination est plus importante que le savoir.",
];

let mantras = [
  "'Chaque matin nous renaissons à nouveau. Ce que nous faisons aujourd'hui est ce qui importe le plus.'",
  "'Il n’existe rien de constant si ce n’est le changement.'",
  "'La paix vient de l’intérieur. Ne la cherchez pas à l’extérieur.'",
  "'La chute n’est pas un échec. L’échec c’est de rester là où on est tombé.'",
  "'Les mots ont le pouvoir de détruire ou de soigner. Lorsqu’ils sont justes et généreux, ils peuvent changer le monde.'",
  "'Si le problème a une solution il ne sert à rien de s’inquiéter, mais s’il n’y a pas de solution, s’inquiéter ne changera rien.'",
  "'Vis comme si l’instant le plus important de ta vie était le moment que tu vis maintenant.'",
  "'Ne t’attache pas à ce que tu possèdes aujourd’hui, car tu peux très bien le perdre demain.'",
  "'Accepte ce qui est, laisse aller ce qui était et aie confiance en ce qui sera.'",
  "'Si tu laisses reposer une eau boueuse, elle s’éclaircira. De même, si tu laisses reposer ton esprit troublé, la chose à faire t’apparaîtra clairement.'",
];

buttonMessage.addEventListener("click", function (event) {
  event.preventDefault();
  buttonClear.classList.remove("hidden");
  meditationImg.classList.add("hidden");
  randomText.classList.remove("hidden");
  let radioInput = document.querySelector(
    "input[name=affirmation-mantra]:checked"
  );

  if (radioInput.value === "affirmation") {
    randomText.innerHTML = `<p>${
      affirmations[getRandomIndex(affirmations)]
    }</p>`;
  } else {
    randomText.innerHTML = `<p>${mantras[getRandomIndex(mantras)]}</p>`;
  }
});

buttonClear.addEventListener("click", function () {
  buttonClear.classList.add("hidden");
  meditationImg.classList.remove("hidden");
  randomText.classList.add("hidden");
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
