
const promise1 = new Promise(function (resolve, reject){
    setTimeout(() => {
        const date = ["banane, appl"]
        resolve(date)
    }, 300)
});

promise1
.then((date) => {
    date.push("mango");
    return date;
})

promise1.then((date) => {
    console.log(date);
})