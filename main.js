function createGame(player1, hour, player2) {
  return `
          <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
          </li>    
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
      <div class="card" style="animation-delay: ${delay}">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games} 
        </ul>
      </div>
  `
}
document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="" />
</header>
      <main id="cards">
      ${createCard(
      "20/11",
      "Domingo",
        createGame("catar", "13:00", "ecuador"))}
      ${createCard(
        "21/11",
        "quinta",
        createGame("england", "10:00", "iran") +
          createGame("unitedstates", "16:00", "gales") +
          createGame("senegal", "13:00", "holand")
      )}
      ${createCard(
        "22/11",
        "terça",
        createGame("argentina", "07:00", "saudiarabia") +
          createGame("mexico", "13:00", "poland") +
          createGame("dinamark", "10:00", "tunisia") +
          createGame("france", "16:00", "australia")
      )}
      ${createCard(
        "23/11",
        "quarta",
        createGame("marocco", "07:00", "croatia") +
          createGame("germany", "10:00", "japan") +
          createGame("spain", "13:00", "costarica") +
          createGame("belgium", "16:00", "canada")
      )}
      ${createCard(
        "24/11",
        "quinta",
        createGame("switzerland", "10:00", "camaroes") +
          createGame("uruguay", "10:00", "southkorea") +
          createGame("portugal", "13:00", "ghana") +
          createGame("brazil", "16:00", "serbia")
      )}
      ${createCard(
        "25/11",
        "sexta",
        createGame("gales", "07:00", "iran") +
          createGame("catar", "10:00", "senegal") +
          createGame("holand", "13:00", "ecuador") +
          createGame("england", "16:00", "unitedstates")
      )}
      ${createCard(
        "26/11",
        "sábado",
        createGame("tunisia", "07:00", "australia") +
          createGame("poland", "10:00", "saudiarabia") +
          createGame("france", "13:00", "dinamark") +
          createGame("argentina", "16:00", "mexico")
      )}
      ${createCard(
        "27/11",
        "domingo",
        createGame("japan", "07:00", "costarica") +
          createGame("belgium", "10:00", "marocco") +
          createGame("croatia", "13:00", "canada") +
          createGame("spain", "16:00", "germany")
      )}
      ${createCard(
        "28/11",
        "segunda",
        createGame("camaroes", "07:00", "serbia") +
          createGame("southkorea", "10:00", "ghana") +
          createGame("brazil", "13:00", "switzerland") +
          createGame("portugal", "16:00", "uruguay")
      )}
      ${createCard(
        "29/11",
        "terça",
        createGame("ecuador", "07:00", "senegal") +
          createGame("holand", "10:00", "catar") +
          createGame("iran", "13:00", "unitedstates") +
          createGame("gales", "16:00", "england")
      )}
      ${createCard(
        "30/11",
        "quarta",
        createGame("tunisia", "12:00", "france") +
          createGame("australia", "10:00", "dinamark") +
          createGame("poland", "13:00", "argentina") +
          createGame("saudiarabia", "16:00", "mexico")
      )}
      ${createCard(
        "01/12",
        "quinta",
        createGame("croatia", "12:00", "belgium") +
          createGame("ghana", "10:00", "uruguay") +
          createGame("japan", "13:00", "spain") +
          createGame("costarica", "16:00", "germany")
      )}
      ${createCard(
        "02/12",
        "sexta",
        createGame("southkorea", "12:00", "portugal") +
          createGame("ghana", "15:00", "uruguay") +
          createGame("brazil", "16:00", "camaroes")
      )}

      </main>
`
