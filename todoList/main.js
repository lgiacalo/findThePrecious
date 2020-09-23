

const buttonChecks = document.querySelectorAll(".button-check")


for (let btnCheck of buttonChecks){
    btnCheck.addEventListener('click', (e) => {
        e.target.classList.toggle("far");
        e.target.classList.toggle("fa-circle");
        e.target.classList.toggle("fas");
        e.target.classList.toggle("fa-check-circle");
    })
}
