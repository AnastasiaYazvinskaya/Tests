data = {
    "courses": {
        "python": {
            "name": "Python",
            "img": "images/python.png",
            "tests": {
                "test1": {
                    "name": "Ввод, вывод, переменные",
                    "questions": {
                        "question1": {
                            "type": "singleChoose",
                            "question_text": "Какая функция используется для ввода информации?",
                            "answers": [["input"]],
                            "options": ["print", "input"]
                        },
                        "question2": {
                            "type": "singleChoose",
                            "question_text": "Какая функция используется для вывода информации?",
                            "answers": [["print"]],
                            "options": ["print", "input"]
                        },
                        "question3": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>print('3' + 3)",
                            "answers": [["Ошибка"]],
                            "options": ["Ошибка", "6", "33"]
                        },
                        "question4": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>print('3' + '3')",
                            "answers": [["33"]],
                            "options": ["Ошибка", "6", "33"]
                        },
                        "question5": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>print(3 + 3)",
                            "answers": [["6"]],
                            "options": ["Ошибка", "6", "33"]
                        },
                        "question6": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>print('3' + str(3))",
                            "answers": [["33"]],
                            "options": ["Ошибка", "6", "33"]
                        },
                        "question7": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>print(int('3') + 3)",
                            "answers": [["6"]],
                            "options": ["Ошибка", "6", "33"]
                        },
                        "question8": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>b = 'a' + 'b'<br>print(b)",
                            "answers": [["ab"]],
                            "options": ["Ошибка", "b", "ab", "a"]
                        },
                        "question9": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>c = 's' * len('03')<br>print(c)",
                            "answers": [["ss"]],
                            "options": ["Ошибка", "sss", "ss", "s"]
                        },
                        "question10": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>d = '3' - '1'<br>print(d)",
                            "answers": [["Ошибка"]],
                            "options": ["Ошибка", "3-1", "2"]
                        },
                        "question11": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>e = int('1' - '1')<br>print(e)",
                            "answers": [["Ошибка"]],
                            "options": ["Ошибка", "0", "1-1"]
                        },
                        "question12": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>a = str(2 * 2) * 2<br>print(a)",
                            "answers": [["44"]],
                            "options": ["Ошибка", "22", "44", "2222"]
                        },
                        "question13": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>b = 'str' * 0<br>print(b)",
                            "answers": [["Ничего"]],
                            "options": ["Ошибка", "str", "Ничего", "0"]
                        },
                        "question14": {
                            "type": "singleChoose",
                            "question_text": "Какой результат выполнения данной программы?<br><br>d = 'apple'<br>print(len(set(d)))",
                            "answers": [["4"]],
                            "options": ["Ошибка", "aple", "4", "Ничего"]
                        },
                        "question15": {
                            "type": "multiChoose",
                            "question_text": "Как сделать перенос строки? (В данных вариантах использованы одинарные ковычки)",
                            "answers": [["'Первая строка\\nВторая строка'"], ["'''Первая строка<br>Вторая строка'''"]],
                            "options": ["'Первая строка\\nВторая строка'", "'''Первая строка<br>Вторая строка'''", "'Первая строка<br>Вторая строка'", "'Первая строка\\nextВторая строка'"]
                        },
                        "question16": {
                            "type": "relation",
                            "question_text": "Соотнесите название метода и её определение",
                            "answers": [["str.capitalize()", "str.count(sub)", "str.find(sub)", 
                                        "str.rfind(sub)", "str.isalnum()", "str.isalpha()", "str.isdecimal()",
                                        "str.isdigit()", "str.isnumeric()", "str.lower()",
                                        "str.upper()", "str.islower()", "str.isupper()"]],
                            "options": ["Перевод первого символа в верхний регистр в строке str",
                                        "Возвращает количество вхождений строки sub в строке str", 
                                        "Возвращает индекс первого вхождения строки sub в строке str",
                                        "Возвращает индекс последнего вхождения строки sub в строке str", 
                                        "Проверяет если строка не пустая и состоит только из букв и цифр",
                                        "Проверяет если строка не пустая и состоит только из букв",
                                        "Проверяет если строка не пустая и состоит только из десятичных цифр",
                                        "Проверяет если строка не пустая и состоит только из десятичных цифр и символов, относящихся к цифрам",
                                        "Проверяет если строка не пустая и состоит только из десятичных цифр и символов, относящихся к цифрам",
                                        "Преобразует все символы в нижний регистр",
                                        "Преобразует все символы в верхний регистр",
                                        "Проверяет если строка не пустая и все символы находятся в нижнем регистре",
                                        "Проверяет если строка не пустая и все символы находятся в верхнем регистре"]
                        },
                        "question17": {
                            "type": "relation",
                            "question_text": "Соотнесите название метода и её определение",
                            "answers": [["str.capitalize()", "str.count(sub)", "str.find(sub)", 
                                        "str.rfind(sub)", "str.isalnum()", "str.isalpha()", "str.isdecimal()",
                                        //"str.isdigit()", "str.isnumeric()", 
                                        "str.lower()",
                                        "str.upper()", "str.islower()", "str.isupper()"]],
                            "options": ["Перевод первого символа в верхний регистр в строке str",
                                        "Возвращает количество вхождений строки sub в строке str", 
                                        "Возвращает индекс первого вхождения строки sub в строке str",
                                        "Возвращает индекс последнего вхождения строки sub в строке str", 
                                        "Проверяет если строка не пустая и состоит только из букв и цифр",
                                        "Проверяет если строка не пустая и состоит только из букв",
                                        "Проверяет если строка не пустая и состоит только из десятичных цифр",
                                        //"Проверяет если строка не пустая и состоит только из десятичных цифр и символов, относящихся к цифрам",
                                        //"Проверяет если строка не пустая и состоит только из десятичных цифр и символов, относящихся к цифрам",
                                        "Преобразует все символы в нижний регистр",
                                        "Преобразует все символы в верхний регистр",
                                        "Проверяет если строка не пустая и все символы находятся в нижнем регистре",
                                        "Проверяет если строка не пустая и все символы находятся в верхнем регистре"]
                        },
                        "questionN": {
                            "type": "textInput",
                            "question_text": "Что выведет данная программа?<br><br>x = 7<br>y = x + 3<br>y = str(y) + '0'<br>print(y)",
                            "answers": [["100"]],
                            "options": []
                        }
                    }
                }
            }
        }/*,
        "new": {
            "name": "New course",
            "img": "images/course.png",
            "tests": {
                "test1": {
                    "name": "Test 1",
                    "questions": {

                    }
                }
            }
        }*/
    }/*,
    "test3": {
        "name": "",
        "questionN": {
            "type": "",
            "question_text": "",
            "answers": [[""]],
            "options": [""]
        }
    }*/
};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
