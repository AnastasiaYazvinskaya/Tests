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
        <p id="question_text">${data[order[n]].question_text}</p>\
    </div>\
    <div id="options"></div>\
    `);
    let div = document.getElementById("options");
    shuffle(data[order[n]].options);
    let options_count = data[order[n]].options.length;
    for (let i=0; i < options_count; i++) {
        div.insertAdjacentHTML('beforeend', '<p><input name="answer" type="checkbox" value="'+ data[order[n]].options[i] +'">'+ data[order[n]].options[i] +'</p>');
    }
}
function textInput(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${data[order[n]].question_text}</p>\
    </div>\
    <p id="options"><input name="answer" type="text" value=""></p>\
    `);
}
function fillGap(n) {
    document.getElementById('add_info').innerHTML = (`\
    <div>\
        <h3>Вопрос №${n+1}</h3>\
        <p id="question_text">${data[order[n]].question_text}</p>\
    </div>\
    <div id="options"></div>\
    `);
    let div = document.getElementById("options");
    let options_count = data[order[n]].answers.length;
    for (let i=0; i < options_count; i++) {
        var gap = data[order[n]].options[i].split("{txt}");
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
        <p id="question_text">${data[order[n]].question_text}</p>\
    </div>\
    <table id="options"></table>\
    `);
    let div = document.getElementById("options");
    let options_count = data[order[n]].options.length;
    let options = JSON.parse(JSON.stringify(data[order[n]].answers[0]));
    shuffle(options);
    for (let i=0; i < options_count; i++) {
        var str = "<tr>";
        str += "<td>" + data[order[n]].options[i] + "</td>";
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
        <p id="question_text">${data[order[n]].question_text}</p>\
    </div>\
    <div id="options" style="display: flex; flex-wrap: wrap;"></div>\
    `);
    let div = document.getElementById("options");
    let options_count = data[order[n]].options.length;
    let option = unique(data[order[n]].answers[0]);
    shuffle(option);
    for (let i=0; i < options_count; i++) {
        var str = "<p style='margin: 5px 15px;'><span style='text-align: center;'>" + data[order[n]].options[i] + "</span>";
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
