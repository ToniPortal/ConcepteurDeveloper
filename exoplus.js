function getElement(selector) {
    return document.querySelectorAll(selector);
}

function setAttribute(selector, name, value) {
    getElement(selector).forEach(element => {
        element.setAttribute(name, value)
    });
}

async function getAttribute(selector, name) {
    let all = [];
    getElement(selector).forEach(async element => {
        var get = element.getAttribute(name);
        if (get !== null) {
            all.push(get)
        }
    });
    return all;
}

async function addAttribute(selector, name, value) {
    let all = await getAttribute(selector, name)
    let id = 0
    getElement(selector).forEach(el => {
        el.setAttribute(name, all[id] + " " + value)
        id++;
    })
}

window.onload = async function () {
    console.log(getElement("td"))
    setAttribute("td", "class", "note");
    
    console.log(await getAttribute("td", "class"));
    addAttribute("td", "class", "note gros")
}

function euclide(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

function PGCD(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

function savedixneufoctobre() {
    a = prompt("Entrer h");
    alert(typeof a);
    b = a + 1;
    alert(b);
    b -= 1;
    alert(b);
}

function aucube(a) {
    return a * a * a
}

function aucube(a){
    return a*a*a
  }
  function imane() {
  let ad = prompt("Prompt")
  
      let resultat = aucube(ad)
      console.log("paf",resultat)
  }
  document.write(`<h1 onclick="imane()">Coucou</h1>`);