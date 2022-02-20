// Dodanie klas oraz produktów
class Produkt{
    constructor(kodKreskowy, nazwaProduktu, cenaNetto){
        this.kodKreskowy = kodKreskowy
        this.nazwaProduktu = nazwaProduktu
        this.cenaNetto = cenaNetto
        this.cenaBrutto = this.naBrutto(this.cenaNetto)
    }

    naBrutto(netto) {
        return (netto * 1.23).toFixed(2)
    }

}

class listaProduktowCLS {
    constructor(){
        this.produkty = []
    }

    nowyProdukt(kodKreskowy, nazwaProduktu, cenaNetto){
        let p = new Produkt(kodKreskowy, nazwaProduktu, cenaNetto)
        this.produkty.push(p)
    }

    get wszystkieProdukty(){
        return this.produkty
    }
}

var produkty = new listaProduktowCLS()

listaProduktowArr.map(el => {
    produkty.nowyProdukt(el.kodKreskowy, el.nazwaProduktu, el.cenaNetto)
})

// Dodanie elementów do select listy
produkty.wszystkieProdukty.map((el, i) => document.querySelector("#listaSelect").innerHTML += `<option id="id${i}" value='${el.kodKreskowy}' cena="${el.cenaBrutto}" nazwa="${el.nazwaProduktu}">${el.nazwaProduktu} || ${(el.cenaBrutto)}zł</option>`)

// Eventy

document.querySelector("#listaBtn"),addEventListener("click", () => {
    document.querySelector("#lista").innerHTML = `<div>Kod kreskowy</div><div>Nazwa produktu</div><div>Cena (brutto)</div>`;
    produkty.wszystkieProdukty.map(el => document.querySelector("#lista").innerHTML += `<div>${el.kodKreskowy}</div><div>${el.nazwaProduktu}</div><div>${(el.cenaBrutto)}zł</div>`);

})

document.querySelector("#zakupyBtn").addEventListener("click", () => {
    document.querySelector("#dodawanie").classList.toggle("hidden");

})

class ProduktNaParagon{
    constructor(kodKreskowy, nazwaProduktu, cenaBrutto){
        this.kodKreskowy = kodKreskowy
        this.nazwaProduktu = nazwaProduktu
        this.cenaBrutto = cenaBrutto
    }

}

class Paragon {
    constructor(){
        this.produkty = []
    }

    nowyProdukt(kodKreskowy, nazwaProduktu, cenaBrutto){
        let p = new ProduktNaParagon(kodKreskowy, nazwaProduktu, cenaBrutto)
        this.produkty.push(p)
    }

    produkty() {
        return this.produkty
    }

}

let paragon = new Paragon()
document.querySelector("#dodaj").addEventListener("click", () => {
    let identyfikator = document.querySelector("#listaSelect").selectedIndex

    let kodKreskowy = document.querySelector(`#id${identyfikator}`).value
    let nazwaProduktu = document.querySelector(`#id${identyfikator}`).attributes.nazwa.value
    let cenaBrutto = document.querySelector(`#id${identyfikator}`).attributes.cena.value
    
    paragon.nowyProdukt(kodKreskowy, nazwaProduktu, cenaBrutto)
    
    let suma = 0

    paragon.produkty.forEach(el => {
        suma += Number(el.cenaBrutto)
    })

    let dzis = new Date();
    let data = dzis.getDate() + "." + (dzis.getMonth()+1) + "." + dzis.getFullYear() +"r."

    document.querySelector("#paragon").innerHTML = `<h1>Paragon: </h1><div style="grid-column:3/4"><span>Data zakupu: ${data}</span><span>VAT: ${(suma - suma*0.187).toFixed(2)}</span></div>`
    paragon.produkty.map(el => {
        document.querySelector("#paragon").innerHTML += `<div>${el.kodKreskowy}</div><div>${el.nazwaProduktu}</div><div>${el.cenaBrutto}zł</div>`
    })


    document.querySelector("#paragon").innerHTML += `<div>Suma: </div><div>${suma.toFixed(2)}zł</div>`

})