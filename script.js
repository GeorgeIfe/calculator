let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelectorAll("#result-box");
let clearBtn = document.querySelectorAll('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
        if (resultBox.innerHTML == "0") {
            resultBox.innerHTML = "";
        }

        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
    });
});


function evaluate(fn) {
    return new Function('return ' + fn)();
}

total.addEventListener('click', ()=> {
    let allInputs = resultBox.innerHTML;
    console.log(evaluate(allInputs));
})


clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})