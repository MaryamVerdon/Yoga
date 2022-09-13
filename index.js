const main = document.querySelector("main");
let exerciceArray = [
  {
    pic: 0,
    min: 1,
  },
  {
    pic: 1,
    min: 1,
  },
  {
    pic: 2,
    min: 1,
  },
  {
    pic: 3,
    min: 1,
  },
  {
    pic: 4,
    min: 1,
  },
  {
    pic: 5,
    min: 1,
  },
  {
    pic: 6,
    min: 1,
  },
  {
    pic: 7,
    min: 1,
  },
  {
    pic: 8,
    min: 1,
  },
  {
    pic: 9,
    min: 1,
  },
];

class Exercice {}

const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },

  handleEventMinutes: function () {
    document.querySelectorAll("input[type='number']").forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exo) => {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
          }
        });
      });
    });
  },
};

const page = {
  lobby: function () {
    let mapArray = exerciceArray
      .map((exo) => {
        return `
            <li>
                <div class="card-header">
                    <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
                    <span>min</span>
                </div>
                <img src="./img/${exo.pic}.png" alt="exercice yoga"/>
                <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
                <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
            </li>
        `;
      })
      .join("");

    utils.pageContent(
      "Paramètrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    utils.handleEventMinutes();
  },

  routine: function () {
    utils.pageContent("Routine", "Exercie avec chrono", null);
  },

  finish: function () {
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>",
      "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
    );
  },
};

page.lobby();
