import { keyboardKeysEn } from 'https://alexeytitkov.github.io/virtual-keyboard/src/js//keyboard-keys-en.js';
import { keyboardKeysRu } from 'https://alexeytitkov.github.io/virtual-keyboard/src/js//keyboard-keys-ru.js';
import { Button } from 'https://alexeytitkov.github.io/virtual-keyboard/src/js//button.js';

// Создаем функцию соединения значений двух раскладок
const keyboardKeysEnRu = keyboardKeysEn.map((enKey, index) => {
  const ruKey = keyboardKeysRu[index];
  return {
    keyEn: enKey.key,
    shiftKeyEn: enKey.shiftKey,
    keyRu: ruKey.key,
    shiftKeyRu: ruKey.shiftKey,
    code: enKey.code, // коды клавиш должны быть одинаковыми в обоих массивах
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

// Создаем элемент "Смена раскладки клавиатуры: Ctrl + Alt"
const layoutInfo = document.createElement('p');
layoutInfo.classList.add('layout-info');
layoutInfo.textContent = 'Смена раскладки клавиатуры: Ctrl + Alt';
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
renderKeyboard(keyboardKeysEnRu);

// Создаем функцию смены раскладки, путем установки класса hidden
function switchLayout(layout) {
  if (layout === 'en') {
    // Переключение на английскую раскладку
    const enElements = document.querySelectorAll('.En');
    const ruElements = document.querySelectorAll('.Ru');
    enElements.forEach((element) => {
      element.classList.remove('hidden');
    });
    ruElements.forEach((element) => {
      element.classList.add('hidden');
    });
  } else if (layout === 'ru') {
    // Переключение на русскую раскладку
    const enElements = document.querySelectorAll('.En');
    const ruElements = document.querySelectorAll('.Ru');
    enElements.forEach((element) => {
      element.classList.add('hidden');
    });
    ruElements.forEach((element) => {
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
let savedLayout = localStorage.getItem('keyboardLayout');

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

document.querySelectorAll('.keyboard-key').forEach((key) => {
  key.addEventListener('mousedown', handleKeyPressDown);
});
document.querySelectorAll('.keyboard-key').forEach((key) => {
  key.addEventListener('mouseup', handleKeyPressUp);
});
window.addEventListener('keydown', handleKeyPressDown);
window.addEventListener('keyup', handleKeyPressUp);

// Контралёр нажатия Shift
let shiftPressed = false;

function handleKeyPressDown(event) {
  textarea.focus();
  let eventCode = event.code;
  if (event.target.classList[1]) {
    eventCode = event.target.classList[1];
  }
  if (event.target.classList[1] === 'key') {
    const parent = event.target.parentNode.parentNode;
    eventCode = parent.classList[1];
  }

  if (eventCode !== 'CapsLock') {
    const keyElement = document.querySelector(`.${eventCode}`);
    keyElement.classList.add('active');
  } else {
    const keyElement = document.querySelector('.CapsLock');
    if (keyElement.classList.contains('active')) {
      keyElement.classList.remove('active');
    } else {
      keyElement.classList.add('active');
    }
  }

  // "Смена раскладки клавиатуры: Ctrl + Alt"
  if (event.ctrlKey && event.altKey) {
    savedLayout = localStorage.getItem('keyboardLayout');
    let newLayout;
    if (savedLayout === 'en') {
      newLayout = 'ru';
    } else if (savedLayout === 'ru') {
      newLayout = 'en';
    } else {
      newLayout = 'en';
    }
    localStorage.setItem('keyboardLayout', newLayout);
    select.value = newLayout;
    if (newLayout === 'en') {
      switchLayout('en');
    } else if (newLayout === 'ru') {
      switchLayout('ru');
    }
  }

  // Shift
  if ((eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') && !shiftPressed) {
    const downAndCapsLockElements = [...document.querySelectorAll('.down-key'), ...document.querySelectorAll('.shift-key')];
    downAndCapsLockElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
    shiftPressed = true;
  }

  // CapsLock
  if (eventCode === 'CapsLock') {
    const downAndShiftElements = [...document.querySelectorAll('.down-key'), ...document.querySelectorAll('.shift-key')];
    downAndShiftElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  const pressedKeyboardKey = document.querySelector(`.keyboard-key.${eventCode}`);
  const pressedLangDiv = pressedKeyboardKey.querySelector('div:not(.hidden)');
  const pressedSpanChar = pressedLangDiv.querySelector('span:not(.hidden)').textContent;

  event.preventDefault();
  switch (eventCode) {
    case 'Tab':
      textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'Space':
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'Enter':
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'Backspace':
      if (textarea.textLength) {
        textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
        break;
      }
    case 'Delete':
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
      break;
    case 'ArrowUp':
      textarea.setRangeText('↑', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'ArrowDown':
      textarea.setRangeText('↓', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'ArrowLeft':
      textarea.setRangeText('←', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'ArrowRight':
      textarea.setRangeText('→', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'CapsLock':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
    case 'MetaLeft':
    case 'MetaRight':
      break;
    default:
      textarea.setRangeText(pressedSpanChar, textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
  }
}

function handleKeyPressUp(event) {
  let eventCode = event.code;
  if (event.target.classList[1]) {
    eventCode = event.target.classList[1];
  }
  if (event.target.classList[1] === 'key') {
    const parent = event.target.parentNode.parentNode;
    eventCode = parent.classList[1];
  }
  if (eventCode !== 'CapsLock') {
    const keyElement = document.querySelector(`.${eventCode}`);
    keyElement.classList.remove('active');
  }

  // Shift
  if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
    shiftPressed = false;
    const downAndCapsLockElements = [...document.querySelectorAll('.down-key'),
      ...document.querySelectorAll('.shift-key')];

    downAndCapsLockElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }
}
