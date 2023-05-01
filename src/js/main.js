import { keyboardKeysEn } from './_keyboard-keys-en.js';
import { keyboardKeysRu } from './_keyboard-keys-ru.js';
import { Button } from './_button.js';

// Создаем функцию соединения значений двух раскладок
const keyboardKeysEnRu = keyboardKeysEn.map((enKey, index) => {
  const ruKey = keyboardKeysRu[index];
  return {
    keyEn: enKey.key,
    shiftKeyEn: enKey.shiftKey,
    keyRu: ruKey.key,
    shiftKeyRu: ruKey.shiftKey,
    code: enKey.code // коды клавиш должны быть одинаковыми в обоих массивах
  };
});

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

// Создаем элемент "Клавиатура создана в операционной системе Windows"
const layoutInfoOS = document.createElement('p');
layoutInfoOS.classList.add('layout-info');
layoutInfoOS.textContent = 'Клавиатура создана в операционной системе Windows';
document.body.appendChild(layoutInfoOS);

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
renderKeyboard(keyboardKeysEnRu)

// Создаем функцию смены раскладки, путем установки класса hidden
function switchLayout(layout) {
  if (layout === 'en') {
    // Переключение на английскую раскладку
    const enElements = document.querySelectorAll('.En');
    const ruElements = document.querySelectorAll('.Ru');
    enElements.forEach(element => {
      element.classList.remove('hidden');
    });
    ruElements.forEach(element => {
      element.classList.add('hidden');
    });
  } else if (layout === 'ru') {
    // Переключение на русскую раскладку
    const enElements = document.querySelectorAll('.En');
    const ruElements = document.querySelectorAll('.Ru');
    enElements.forEach(element => {
      element.classList.add('hidden');
    });
    ruElements.forEach(element => {
      element.classList.remove('hidden');
    });
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

// Проверяем, сохранена ли раскладка в localStorage
const savedLayout = localStorage.getItem('keyboardLayout');

// Если раскладка сохранена, то выбираем ее при загрузке страницы
if (savedLayout === 'en') {
  select.value = 'en';
  switchLayout('en');
} else if (savedLayout === 'ru') {
  select.value = 'ru';
  switchLayout('ru');
} else {
// Если раскладка не сохранена, то отображаем английскую раскладку при загрузке страницы
  switchLayout('en');
}

// Обработчик события изменения выбранной опции
function handleLayoutChange(event) {
  const layout = event.target.value;
  if (layout === 'en') {
    localStorage.setItem('keyboardLayout', 'en'); // сохраняем выбранную раскладку в localStorage
    switchLayout('en');
  } else if (layout === 'ru') {
    localStorage.setItem('keyboardLayout', 'ru'); // сохраняем выбранную раскладку в localStorage
    switchLayout('ru');
  }
}
