let b1 = document.getElementById('btn1')
let b2 = document.getElementById('btn2')
let b3 = document.getElementById('btn3')
let a = document.getElementById('alert')

b1.addEventListener('click', ciclowhile)
b2.addEventListener('click', ciclodowhile)
b3.addEventListener('click', ciclofor)

function ciclowhile() {

    let g = 0
    let x = 1

    while (x <= 10) {

        g += Number(prompt(`Edad de estudiante ${x}:`))
        x++
    }

    printers(g / (x - 1))

}

function ciclodowhile() {

    let g = 0
    let x = 1

    do {
        g += Number(prompt(`Edad de estudiante ${x}:`))
        x++
    } while (x <= 10)

    printers(g / (x - 1))

}

function ciclofor() {

    let g = 0
    let x = 0

    for (x = 1; x <= 10; x++) {
        g += Number(prompt(`Edad de estudiante ${x}:`))
    }

    printers(g / x)

}

function printers(str) {
    a.innerHTML = `<div class="alert alert-primary my-5" role="alert">
                        <strong>La edad promedio es: ${Math.round(str)} año(s)</strong>
                    </div>`
}