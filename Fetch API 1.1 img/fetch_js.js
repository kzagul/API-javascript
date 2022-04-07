console.log("about fetch api")

fetch('rainbow.jpeg').then(responce => {
     console.log(responce)
     return responce.blob()
}).then(blob => {
    console.log(blob)
    document.getElementById("rainbow").src = URL.createObjectURL(blob)
}).catch(error =>{
    console.log(error)
})


async function getRainbow()