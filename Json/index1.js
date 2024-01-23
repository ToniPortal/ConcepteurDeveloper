const API_KEY = 'c5e0e342f4064131800e8aef33a08ede';

async function getRecipe() {
    const setting = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let query = document.getElementById("search").value
    const json = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`, setting)
    const data = await json.json();
    console.log(data)
    document.getElementById("json").innerText = "";

    (data.results).forEach(element => {
        document.getElementById("json").innerText += `${element.title}\n`;
    });
}

