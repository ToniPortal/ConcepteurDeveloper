window.onload = function () {
    document.getElementById("box").style = `background-color: green`;


    document.getElementById("colorinput").addEventListener('input', async function (evt) {
        let couleur = this.value

        document.getElementById("box").style = `background-color: ${couleur}`;
    });



}

const API_KEY = "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";

async function btn() {
    let i = document.getElementById("colorinput");

    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": `Je vais te donner une couleur française que tu devra traduire en anglais,mais ta réponse devra contenir uniquement la couleur traduite : ${i.value}` }],
            "temperature": 0.7
        })
    });

    const data = await response.json();
    console.log(data);
    i.value = (data.choices[0].message.content).toLowerCase();
    document.getElementById("box").style = `background-color: ${(data.choices[0].message.content).toLowerCase()}`;

}
