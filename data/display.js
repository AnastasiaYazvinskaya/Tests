function showCourses() {
    document.getElementById('items').innerHTML = '';
    document.getElementById('course').innerHTML = '';
    document.getElementById('test').innerHTML = '';
    document.getElementById('question').innerHTML = '';
    document.getElementById('question').style.display = 'none';
    for (key in data.courses) {
        document.getElementById('items').innerHTML += (`\
        <div onclick="showTests('${key}')" class="item clicked">\
            <h2>${data.courses[key].name}</h2>\
            <img src="${data.courses[key].img}" alt="Изображение курса ${data.courses[key].name}">\
        </div>\
        `);
    }
}

function showTests(course) {
    document.getElementById('items').innerHTML = '';
    document.getElementById('test').innerHTML = '';
    document.getElementById('question').innerHTML = '';
    document.getElementById('question').style.display = 'none';
    document.getElementById('course').innerHTML = data.courses[course].name;
    //document.getElementById('course').onclick = showTests(course);
    for (key in data.courses[course].tests) {
        document.getElementById('items').innerHTML += (`\
        <div onclick="showTest('${course}', '${key}')" class="item clicked">\
            <h2>${data.courses[course].tests[key].name}</h2>\
        </div>\
        `);
    }
}

function showTest(course, test) {
    document.getElementById('items').innerHTML = '';
    document.getElementById('test').innerHTML = data.courses[course].tests[test].name;
    order = Object.keys(data.courses[course].tests[test].questions);
    shuffle(order);
    question = data.courses[course].tests[test].questions;
    document.getElementById('question').innerHTML += (`\
    <p>fjnjkg</p>\
    <button type="button" onclick="start('${course}', '${test}', 0)">Начать</button>\
    `);
    document.getElementById('question').style.display = 'block';
}

function start(course, test, n) {
    document.getElementById('question').innerHTML = (`\
    <div id="main-section">\
        <div id="add_info"></div>\
        <div id="right_result"></div>\
        <div id="wrong_result"></div>\
        <div id="no_result"></div>\
        <button id="check" type="button" onclick="checkAnswer(${n})">Проверить</button>\
        <button id="finish" type="button" onclick="showTests('${course}')" style="display: none;">Завершить</button>\
        <div id="next" style="display: flex;">\
            <button type="button" onclick="nextQuestion(${n+1})">Далее</button>\
            <button id="help" type="button" onclick="help(${n})">Пояснение</button>\
        </div>\
        <p id="stage"><span id="current"></span>/<span id="total"></span></p>\
    </div>\
    <div id="help-info"></div>\
    `);
    document.getElementById('total').innerHTML = order.length;
    nextQuestion(n);
}