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
    let all = await getAttribute(selector,name)
    getElement(selector).forEach(el => {
        el.setAttribute(name, all.join(" ") + " " + value)
    })
}

window.onload = async function () {
    //console.log(getElement("td"))

    // setAttribute("td", "class", "note");

    // console.log(await getAttribute("td", "class"));

    addAttribute("td", "class", "note gros")
}