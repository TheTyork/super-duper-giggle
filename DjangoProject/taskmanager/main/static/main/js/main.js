fetch('http://127.0.0.1:8000/api/pages/')
    .then(res => res.json())
    .then(data =>
        document.getElementById('menu').innerHTML =
            JSON.stringify(data)
    )


// let mark = document.getElementById('menu').children
// console.log(mark)
