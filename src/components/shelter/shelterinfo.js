import React, { Component } from 'react'

export class shelterinfo extends Component {
    render() {
        return (
            <div id="shelterInfoContainer" class="container">
            <button onclick="slideShelterSearch()" id="backToSearchBtn" class="slideBtns"><span> TILLBAKA TILL SÖK</span></button>
            <div id="shelterInfoTextContainer" class="container">
            <h1>SKYDDSRUM</h1>
            <p id="ingress">
                Skyddsrum ska ge skydd åt befolkningen i händelse av krig och är byggda för att skydda mot effekterna av olika slags stridsmedel som kan komma att användas i krig. 
            </p>
            <h2>SKYDD FÖR BEFOLKNINGEN VID KRIG</h2>  
            <p>
                När ett skyddsrum är klart att användas ska det finnas vatten upptappat i kärl, värme, ventilation och toalettmöjligheter. I en krigssituation får du vara beredd på att det kan vara avbrott i exempelvis vatten-, el- och värmeförsörjningen till skyddsrummet. Mat och exempelvis hygienprodukter finns inte i skyddsrummen. Det behöver du ta med själv, se checklistan nedan.
            </p>
            <p>
                Skyddsrummen är utformade för ett visst antal personer. Om man använder skyddsrummet till så många människor som rummet är byggt för, ska man kunna vistas där utan avbrott i minst tre dygn. Skyddsrummen är byggda för att kunna skydda mot stötvåg och splitter från exempelvis en granatexplosion, brand samt kemiska stridsmedel och strålning från radioaktiva ämnen.&nbsp;
            </p>
            <h2>SKYDDSRUMMEN I FREDSTID</h2>
            <p>
                I Sverige finns cirka 65 000 skyddsrum med plats för ungefär sju miljoner människor. Skyddsrummen finns inrymda i olika typer av byggnader, såsom bostadshus och industrifastigheter, och är utmärkta med en särskild skylt. I fredstid kan ett skyddsrum användas till annat.
            <br />
            <br />
                Det är olika hotbildsanalyser som bestämt var i Sverige skyddsrum ska finnas. Det har alltså aldrig varit ambitionen att bygga skyddsrum för hela befolkningen. Det beror på var man befinner sig om man behöver tillgång till skyddsrum.
            </p>
            <h2>SKYDDSRUMMEN VID HÖJD BEREDSKAP ELLER KRIG</h2>
            <p>
                Om skyddsrummet behöver användas i krig eller om regeringen har meddelat höjd beredskap, ska skyddsrummet kunna ställas i ordning inom två dygn. Det är i första hand byggnadens ägare eller nyttjanderättshavare som ska göra det möjligt att komma in i skyddsrummet. Ta reda på var ditt närmaste skyddsrum finns där du bor och där du befinner dig dagtid. Vid flyglarm ska du omedelbart bege dig till ett skyddsrum eller ett annat skyddande utrymme som källare, tunnel eller tunnelbanestation.
            </p>
            <h2>NULÄGE OCH UTVECKLING FRAMÅT</h2>
            <p>
                Några nya skyddsrumsplatser har inte byggts i Sverige sedan 2002 och många av de skyddsrum som finns i dag behöver moderniseras. Hur behovet av skyddsrum ser ut utifrån dagens hotbild, om det ska byggas fler skyddsrum eller om nuvarande skyddsrum ska kompletteras med andra former av skydd ska utredas. Myndigheten för samhällsskydd och beredskap, som har ett övergripande ansvar för landets skyddsrum, anser att befintliga skyddsrum ska bevaras i så stor utsträckning som möjligt, men ytterst är det riksdag och regering som beslutar om den framtida inriktningen.
            </p>
        </div>
        <div id="shelterChecklistContainer" class="container">
            <img class="icons" src="Images/checklist-512.png"></img>
            <h2>BRA ATT TA MED TILL SKYDDSRUMMET</h2>
            <ul id="shelterChecklist">
                <li>vatten i flaska eller dunk</li>
                <li>mat som tål rumstemperatur</li>
                <li>hygienartiklar</li>
                <li>toalettpapper</li>
                <li>mediciner</li>
                <li>första hjälpen-utrustning</li>
                <li>varma kläder</li>
                <li>värdehandlingar (id-kort/körkort, kontanter, kontokort)</li>
                <li>nycklar</li>
                <li>mobiltelefon + laddare eller powerbank</li>
                <li>ficklampa</li>
            </ul>
        </div>

        
        </div>
        )
    }
}

export default shelterinfo
