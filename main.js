function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assents/icon-${player1}.svg" alt="Bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="./assents/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>

    `
}
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}


document.querySelector("#cards").innerHTML =
        createCard("22/11", "terça",
        createGame('france','16:00','australia') +
        createGame('denmark', '10:00', 'tunisia')
        ) +
        createCard("24/11", "quinta",
            createGame('ghana','13:00','portugal') +
            createGame('brazil','16:00','serbia')
        ) +
        createCard("27/11","domingo",
            createGame('croatia','13:00','canada') +
            createGame('spain','16:00','germany')
        ) +
        createCard("01/12","quinta",
            createGame('croatia','12:00','belgium') +
            createGame('spain','16:00','japan')
        )
