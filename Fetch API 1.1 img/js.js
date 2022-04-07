a = 7
// let image = document.getElementById("rainbow")
// let cnt = image.style.opacity

var newPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(a = 99)
        resolve(image.style.opacity = 100)
    }, 2000)
})

newPromise.then(() => {
    console.log(a)
})


