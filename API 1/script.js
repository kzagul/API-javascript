function setData(){
    let p = cntBtn()
    localStorage.setItem(`data_${p}`, p)
    console.log(localStorage.getItem(`data_${p}`))
    alertFunc(p)
}

alertFunc = (par) =>{
    alert(`Cd disk Added with data_${par}`)
}

let cnt = -1

cntBtn = () => {
    cnt += 1
    return cnt
}

///////

window.addEventListener("storage", function(e){
    console.log("change")
})

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90]

localStorage.setItem("array_item", JSON.stringify(array))
let data_ld = JSON.parse(localStorage.getItem("array_item"))

console.log(data_ld)
console.log(typeof data_ld)

let array2 = {
    name: "kirill",
    age: 20
}
localStorage.setItem("array_item2", JSON.stringify(array2))
let data_ld2 = JSON.parse(localStorage.getItem("array_item2"))

console.log(data_ld2)
console.log(typeof data_ld2)