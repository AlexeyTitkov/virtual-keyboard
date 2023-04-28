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

// Проверяем, сохранена ли раскладка в localStorage
const savedLayout = localStorage.getItem('keyboardLayout');

// Если раскладка сохранена, то выбираем ее при загрузке страницы
if (savedLayout === 'en') {
  select.value = 'en';
  renderKeyboard(keyboardKeysEn);
} else if (savedLayout === 'ru') {
  select.value = 'ru';
  renderKeyboard(keyboardKeysRu);
} else {
// Если раскладка не сохранена, то отображаем английскую раскладку при загрузке страницы
  renderKeyboard(keyboardKeysEn);
}

// Обработчик события изменения выбранной опции
function handleLayoutChange(event) {
  const layout = event.target.value;
  if (layout === 'en') {
    localStorage.setItem('keyboardLayout', 'en'); // сохраняем выбранную раскладку в localStorage
    renderKeyboard(keyboardKeysEn);
  } else if (layout === 'ru') {
    localStorage.setItem('keyboardLayout', 'ru'); // сохраняем выбранную раскладку в localStorage
    renderKeyboard(keyboardKeysRu);
  }
}
