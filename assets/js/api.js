// on déclare une variables avec l'url de l'api
let endpoint = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

//Cette function déclare les propriétés concernant un tableau
function setHTML(blague) {
    let generatedBlagueLine = document.createElement('TR');
    let tdSetup = document.createElement('TD');
    tdSetup.innerText = blague.setup;
    let tdDelivery = document.createElement('TD');
    tdDelivery.innerText = blague.delivery;

    generatedBlagueLine.appendChild(tdSetup);
    generatedBlagueLine.appendChild(tdDelivery);
    return generatedBlagueLine;
}

// On utilise la mèthode fetch pour récupérer les infos sur l'api depuis la function clickEvent qui est appeler quand on clique sur le bouton
// dans le contenue html
function clickEvent() {
    fetch(endpoint)
        .then(
            function (response) {
                console.log(response);
                if (response.statusText === "OK") {
                    response.json()
                        .then(
                            function (datas) {
                                console.table(datas);
                                let blaguetab = document.getElementById("BlagueLine");
                                blaguetab.appendChild(setHTML(datas));
                            })
                }
            },
            function (error) { console.error(error); }

        )
}