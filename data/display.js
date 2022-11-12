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

function showTests(c) {
    course = c;
    //document.getElementById('test1').innerHTML = course;
    document.getElementById('items').innerHTML = '';
    document.getElementById('test').innerHTML = '';
    document.getElementById('question').innerHTML = '';
    document.getElementById('question').style.display = 'none';
    document.getElementById('course').innerHTML = data.courses[course].name;
    //document.getElementById('course').onclick = showTests(course);
    for (key in data.courses[course].tests) {
        document.getElementById('items').innerHTML += (`\
        <div onclick="showTest('${key}')" class="item clicked">\
            <h2>${data.courses[course].tests[key].name}</h2>\
        </div>\
        `);
    }
}

function showTest(t) {
    test = t;
    //document.getElementById('test1').innerHTML = test;
    document.getElementById('items').innerHTML = '';
    document.getElementById('test').innerHTML = data.courses[course].tests[test].name;
    order = Object.keys(data.courses[course].tests[test].questions).slice(0,10);
    shuffle(order);
    question = data.courses[course].tests[test].questions;
    document.getElementById('question').innerHTML += (`\
    <p>Данный тест является обучающим. Это значит, что вы можете проверить свои знания, а так же если задача вызвала затруднения, вы можете посмотреть пояснение к текущему вопросу и разобраться с темой.<br><br>10 вопросов рандомно выбраны из банка.</p>\
    <button type="button" onclick="nextQuestion(0)">Начать</button>\
    `);
    document.getElementById('question').style.display = 'block';
}