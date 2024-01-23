window.onload = function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let formdata = new FormData(form);
        console.log(formdata);
        let prod = formdata.get("produit");
        let obj = JSON.stringify({
            "produit": prod,
            "quantite": formdata.get("quantite"),
            "prix": formdata.get("prix")
        })
        localStorage.setItem(prod, obj)

    })
}


function getItem() {
    let prod = document.getElementsByName("produit")[0].value;
    console.log(prod)
    if (prod != "") {
        let stor = localStorage.getItem(prod)
        if(stor == null){
            alert("Vous n'avez pas de produit associée")
        }else {
            let s = JSON.parse(stor)
            document.getElementById("getitem").innerText = `Produit : ${s.produit}\nQuantite: ${s.quantite}\nPrix : ${s.prix}`
        }
    } else {
        alert("Vous n'avez pas rentrer le produit que vous voulez get")
    }

}