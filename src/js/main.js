import { keyboardKeysEn } from './_keyboard-keys-en.js';
import { keyboardKeysRu } from './_keyboard-keys-ru.js';
import { Button } from './_button.js';

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

// Создаем функцию для отрисовки клавиатуры на странице
function renderKeyboard(keyboardKeys) {
  function generateButtons() {
    const buttons = []; // очищаем массив от предыдущей раскладки
    keyboardKeys.forEach((button) => {
      buttons.push(new Button(button));
    });
    return buttons;
  }
  keyboardContainer.innerHTML = ''; // очищаем контейнер от предыдущих кнопок клавиатуры
  generateButtons(keyboardKeys).forEach((button) => { // добавляем кнопку в контейнер клавиатуры
    keyboardContainer.append(button.generateButton());
  });
}

renderKeyboard(keyboardKeysEn);

// Обработчик события изменения выбранной опции
function handleLayoutChange(event) {
  const layout = event.target.value;
  if (layout === 'en') {
    renderKeyboard(keyboardKeysEn);
  } else if (layout === 'ru') {
    renderKeyboard(keyboardKeysRu);
  }
}

// Создаем выпадающий список для выбора раскладки клавиатуры
const select = document.createElement('select');
select.classList.add('toggle-lang');
select.addEventListener('change', handleLayoutChange); // добавляем обработчик события на изменение раскладки
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
