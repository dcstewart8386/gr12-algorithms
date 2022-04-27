function renderQuestion(text, callback) {
    const p = document.createElement("p")
    p.innerHTML = text
    document.getElementById("questions").appendChild(p)

    const input = document.createElement("input")
    input.setAttribute('size', 50)
    document.getElementById("questions").appendChild(input)

    const button = document.createElement("button")
    button.innerHTML = "Submit Answer"
    document.getElementById("questions").appendChild(button)

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") 
            button.click();
    })

    const ansp = document.createElement("p")
    document.getElementById("questions").appendChild(ansp)
    button.addEventListener("click", () => callback((str) => {
       ansp.innerHTML += str + "<br>"
    }, input.value));

    const hr = document.createElement("hr")
    document.getElementById("questions").appendChild(hr)
}