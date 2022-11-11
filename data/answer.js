function clearResult(){
    rr = document.getElementById('right_result');
    wr = document.getElementById('wrong_result');
    nr = document.getElementById('no_result');
    rr.innerHTML = "";
    rr.style.padding = "0";
    wr.innerHTML = "";
    wr.style.padding = "0";
    nr.innerHTML = "";
    nr.style.padding = "0";
}

function singleChooseCheck(n) {
    clearResult();
    var radio = document.getElementsByName('answer');
    var cor_answer = 1;
    var answer = question[order[n]].answers.length;
    for (let i=0; i < radio.length; i++) {
        if (radio[i].checked) {
            answer--;
            if (question[order[n]].answers[0].includes(radio[i].value)) {
                cor_answer--;
            }
            result(n, cor_answer);
        }
    }
    if (answer == question[order[n]].answers[0].length) {
        nr.innerHTML = "Выберите ответ";
        nr.style.padding = "5px";
    }
}
function multiChooseCheck(n) {
    clearResult();
    var checkbox = document.getElementsByName('answer');
    var cor_answer = data[order[n]].answers.length;
    var answer = data[order[n]].answers.length;
    for (let i=0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            answer--;
            for (let j=0; j<data[order[n]].answers.length; j++) {
                if (data[order[n]].answers[j].includes(checkbox[i].value)) {
                    cor_answer--;
                }
            }
            result(n, cor_answer, data[order[n]].answers.length);
        }
    }
    if (answer == data[order[n]].answers.length) {
        clearResult();
        nr.innerHTML = "Выберите ответ";
        nr.style.padding = "5px";
    }
}
function textInputCheck(n) {
    clearResult();
    var input = document.getElementsByName('answer');
    var cor_answer = 1;
    var answer = data[order[n]].answers.length;

    if (input[0].value != '') {
        answer--;
        if (data[order[n]].answers[0].includes(input[0].value)) {
            cor_answer--;
        }
        result(n, cor_answer);
    }
    if (answer == data[order[n]].answers.length) {
        nr.innerHTML = "Введите ответ";
        nr.style.padding = "5px";
    }
}
function fillGapCheck(n) {
    clearResult();
    var input = document.getElementsByName('answer');
    var cor_answer = data[order[n]].answers.length;
    var answer = 0;
    for (let i=0; i < input.length; i++) {
        if (input[i].value != '') {
            answer++;
            if (data[order[n]].answers[i].includes(input[i].value)) {
                cor_answer--;
            }
            result(n, cor_answer);
        }
    }
    if (answer == 0) {
        nr.innerHTML = "Введите ответ";
        nr.style.padding = "5px";
    }
}
function relationCheck(n) {
    clearResult();
    var input = document.getElementsByName('answer');
    var cor_answer = data[order[n]].answers[0].length;
    var answer = data[order[n]].answers[0].length;
    for (let i=0; i < input.length; i++) {
        if (input[i].value != '') {
            answer--;
            if (data[order[n]].answers[0][i] == input[i].value) {
                cor_answer--;
            }
            result(n, cor_answer, data[order[n]].answers[0].length);
        }
    }
    if (answer == data[order[n]].answers[0].length) {
        nr.innerHTML = "Введите ответ";
        nr.style.padding = "5px";
    }
}


function result(n, cor_answer, answers_num=1) {
    clearResult();
    if (cor_answer == 0) {
        rr.innerHTML = "Ответ верный";
        rr.style.padding = "5px";
        document.getElementById('check').style.display = 'none';
        var inputs = document.getElementsByName('answer');
        for (let i = 0; i< inputs.length; i++) {
            inputs[i].disabled = true;
        }
        if (n < order.length-1) {
            document.getElementById('next').style.display = 'block';
            document.getElementById('stage').style.marginBottom = '10px';
        } else {
            document.getElementById('finish').style.display = 'block';
        }
    } else if (cor_answer != answers_num) {
        wr.innerHTML = "Ответ частично верный";
        wr.style.padding = "5px";
    } else {
        wr.innerHTML = "Ответ неверный";
        wr.style.padding = "5px";
    }
}

function checkAnswer(n) {
    switch (question[order[n]].type) {
        case "singleChoose": singleChooseCheck(n); break;
        case "textInput": textInputCheck(n); break;
        case "multiChoose": multiChooseCheck(n); break;
        case "fillGap": fillGapCheck(n); break;
        case "relation": relationCheck(n); break;
        case "relationTable": relationCheck(n); break;
    }
}