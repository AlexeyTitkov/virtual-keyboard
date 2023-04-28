import { keyboardKeysEn } from "./_keyboard-keys-en.js";
import { keyboardKeysRu } from "./_keyboard-keys-ru.js";

// Создаем заголовок
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'Virtual Keyboard';
document.body.appendChild(h1);

// Создаем строку ввода
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
document.body.appendChild(textarea);
textarea.focus();

// Создаем контейнер для клавиатуры
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
document.body.appendChild(keyboardContainer);

// Создаем элемент "Смена раскладки клавиатуры: Shift + Alt"
const layoutInfo = document.createElement('p');
layoutInfo.classList.add('layout-info');
layoutInfo.textContent = 'Смена раскладки клавиатуры: Shift + Alt';
document.body.appendChild(layoutInfo);

// Создаем выпадающий список для выбора раскладки клавиатуры
const select = document.createElement('select');
select.classList.add('toggle-lang');
document.body.appendChild(select);

// Создаем опции для выбора раскладки клавиатуры
const enOption = document.createElement('option');
enOption.textContent = 'En';
enOption.value = 'en';
select.appendChild(enOption);

const ruOption = document.createElement('option');
ruOption.textContent = 'Ru';
ruOption.value = 'ru';
select.appendChild(ruOption);
