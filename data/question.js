function unique(arr) {
    let result = [];
  
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
  
    return result;
}

function singleChoose(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <div id="options"></div>\
    `);
    let div = document.getElementById("options");
    shuffle(question[order[n]].options);
    let options_count = question[order[n]].options.length;
    for (let i=0; i < options_count; i++) {
        div.insertAdjacentHTML('beforeend', '<p><input name="answer" type="radio" value="'+ question[order[n]].options[i] +'">'+ question[order[n]].options[i] +'</p>');
    }
}
function multiChoose(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <div id="options"></div>\
    `);
    let div = document.getElementById("options");
    shuffle(question[order[n]].options);
    let options_count = question[order[n]].options.length;
    for (let i=0; i < options_count; i++) {
        div.insertAdjacentHTML('beforeend', '<p><input name="answer" type="checkbox" value="'+ question[order[n]].options[i] +'">'+ question[order[n]].options[i] +'</p>');
    }
}
function textInput(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <p id="options"><input name="answer" type="text" value=""></p>\
    `);
}
function fillGap(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <div id="options"></div>\
    `);
    let div = document.getElementById("options");
    let options_count = question[order[n]].answers.length;
    for (let i=0; i < options_count; i++) {
        var gap = question[order[n]].options[i].split("{txt}");
        var str = "";
        for (let j=0; j < gap.length; j++) {
            str += gap[j];
            if (j != gap.length-1) {
                str += '<input class="gap" name="answer" type="text" value="">';
            }
        }
        div.insertAdjacentHTML('beforeend', '<p>'+ str +'</p>');
    }
}
function relation(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <table id="options"></table>\
    `);
    let div = document.getElementById("options");
    let options_count = question[order[n]].options.length;
    let options = JSON.parse(JSON.stringify(question[order[n]].answers[0]));
    shuffle(options);
    for (let i=0; i < options_count; i++) {
        var str = "<tr>";
        str += "<td>" + question[order[n]].options[i] + "</td>";
        str += '<td><select name="answer"><option value=""></option>';
        for (let j=0; j < options.length; j++) {
            str += '<option value="'+ options[j] +'">'+ options[j] +'</option>';
        }

        str += '</select></td></tr>';
        div.insertAdjacentHTML('beforeend', '<p>'+ str +'</p>');
    }
}
function relationTable(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${question[order[n]].question_text}</p>\
    </div>\
    <div id="options" style="display: flex; flex-wrap: wrap;"></div>\
    `);
    let div = document.getElementById("options");
    let options_count = question[order[n]].options.length;
    let option = unique(question[order[n]].answers[0]);
    shuffle(option);
    for (let i=0; i < options_count; i++) {
        var str = "<p style='margin: 5px 15px;'><span style='text-align: center;'>" + question[order[n]].options[i] + "</span>";
        str += '<select name="answer"><option value=""></option>';
            for (let j=0; j < option.length; j++) {
                str += '<option value="'+ option[j] +'">'+ option[j] +'</option>';
            }
        str += '</select></p>';
        div.insertAdjacentHTML('beforeend', str);
    }
}

function showQuestion(n) {
    clearResult();
    document.getElementById('current').innerHTML = n+1;
    document.getElementById('next').style.display = 'none';
    document.getElementById('help').style.display = 'none';
    document.getElementById('check').style.display = 'block';
    document.getElementById('help-info').style.display = 'none';
    
    switch (question[order[n]].type) {
        case "singleChoose": singleChoose(n); break;
        case "textInput": textInput(n); break;
        case "multiChoose": multiChoose(n); break;
        case "fillGap": fillGap(n); break;
        case "relation": relation(n); break;
        case "relationTable": relationTable(n); break;
    }
}

function nextQuestion(n) {
    //document.getElementById('test1').innerHTML = test;
    questBody(n);
    if (n < order.length) {
        if (n == order.length-1) {
            document.getElementById('next').style.display = 'none';
        }
        showQuestion(n);
    }
}

function help(n){
    document.getElementById('help-info').innerHTML = question[order[n]].help;
    document.getElementById('help-info').style.display = 'block';
}

function questBody(n) {
    document.getElementById('question').innerHTML = (`\
    <div id="main-section">\
        <div id="add_info"></div>\
        <div id="right_result"></div>\
        <div id="wrong_result"></div>\
        <div id="no_result"></div>\
        <div style="display: flex;">\
        <button id="check" type="button" onclick="checkAnswer(${n})">Проверить</button>\
        <button id="finish" type="button" onclick="showTests('${course}')" style="display: none;">Завершить</button>\
            <button id="next" type="button" onclick="nextQuestion(${n+1})">Далее</button>\
            <button id="help" type="button" onclick="help(${n})">Пояснение</button>\
        </div>\
        <p id="stage"><span id="current"></span>/<span id="total"></span></p>\
    </div>\
    <div id="help-info"></div>\
    `);
    document.getElementById('total').innerHTML = order.length;
    //document.getElementById('test1').innerHTML = order[n];
}
