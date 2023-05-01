const keyboardKeysEn = [
  { key: '`', shiftKey: '~', code: 'Backquote' },
  { key: '1', shiftKey: '!', code: 'Digit1' },
  { key: '2', shiftKey: '@', code: 'Digit2' },
  { key: '3', shiftKey: '#', code: 'Digit3' },
  { key: '4', shiftKey: '$', code: 'Digit4' },
  { key: '5', shiftKey: '%', code: 'Digit5' },
  { key: '6', shiftKey: '^', code: 'Digit6' },
  { key: '7', shiftKey: '&', code: 'Digit7' },
  { key: '8', shiftKey: '*', code: 'Digit8' },
  { key: '9', shiftKey: '(', code: 'Digit9' },
  { key: '0', shiftKey: ')', code: 'Digit0' },
  { key: '-', shiftKey: '_', code: 'Minus' },
  { key: '=', shiftKey: '+', code: 'Equal' },
  { key: 'Backspace', shiftKey: 'Backspace', code: 'Backspace' },
  { key: 'Tab', shiftKey: 'Tab', code: 'Tab' },
  { key: 'q', shiftKey: 'Q', code: 'KeyQ' },
  { key: 'w', shiftKey: 'W', code: 'KeyW' },
  { key: 'e', shiftKey: 'E', code: 'KeyE' },
  { key: 'r', shiftKey: 'R', code: 'KeyR' },
  { key: 't', shiftKey: 'T', code: 'KeyT' },
  { key: 'y', shiftKey: 'Y', code: 'KeyY' },
  { key: 'u', shiftKey: 'U', code: 'KeyU' },
  { key: 'i', shiftKey: 'I', code: 'KeyI' },
  { key: 'o', shiftKey: 'O', code: 'KeyO' },
  { key: 'p', shiftKey: 'P', code: 'KeyP' },
  { key: '[', shiftKey: '{', code: 'BracketLeft' },
  { key: ']', shiftKey: '}', code: 'BracketRight' },
  { key: '\\', shiftKey: '|', code: 'Backslash' },
  { key: 'Del', shiftKey: 'Del', code: 'Delete' },
  { key: 'Caps Lock', shiftKey: 'Caps Lock', code: 'CapsLock' },
  { key: 'a', shiftKey: 'A', code: 'KeyA' },
  { key: 's', shiftKey: 'S', code: 'KeyS' },
  { key: 'd', shiftKey: 'D', code: 'KeyD' },
  { key: 'f', shiftKey: 'F', code: 'KeyF' },
  { key: 'g', shiftKey: 'G', code: 'KeyG' },
  { key: 'h', shiftKey: 'H', code: 'KeyH' },
  { key: 'j', shiftKey: 'J', code: 'KeyJ' },
  { key: 'k', shiftKey: 'K', code: 'KeyK' },
  { key: 'l', shiftKey: 'L', code: 'KeyL' },
  { key: ';', shiftKey: ':', code: 'Semicolon' },
  { key: "'", shiftKey: '"', code: 'Quote' },
  { key: 'Enter', shiftKey: 'Enter', code: 'Enter' },
  { key: 'Shift', shiftKey: 'Shift', code: 'ShiftLeft' },
  { key: 'z', shiftKey: 'Z', code: 'KeyZ' },
  { key: 'x', shiftKey: 'X', code: 'KeyX' },
  { key: 'c', shiftKey: 'C', code: 'KeyC' },
  { key: 'v', shiftKey: 'V', code: 'KeyV' },
  { key: 'b', shiftKey: 'B', code: 'KeyB' },
  { key: 'n', shiftKey: 'N', code: 'KeyN' },
  { key: 'm', shiftKey: 'M', code: 'KeyM' },
  { key: ',', shiftKey: '<', code: 'Comma' },
  { key: '.', shiftKey: '>', code: 'Period' },
  { key: '/', shiftKey: '?', code: 'Slash' },
  { key: '▲', shiftKey: '▲', code: 'ArrowUp' },
  { key: 'Shift', shiftKey: 'Shift', code: 'ShiftRight' },
  { key: 'Ctrl', shiftKey: 'Ctrl', code: 'ControlLeft' },
  { key: 'Win', shiftKey: 'Win', code: 'MetaLeft' },
  { key: 'Alt', shiftKey: 'Alt', code: 'AltLeft' },
  { key: 'Space', shiftKey: 'Space', code: 'Space' },
  { key: 'Alt', shiftKey: 'Alt', code: 'AltRight' },
  { key: '◄', shiftKey: '◄', code: 'ArrowLeft' },
  { key: '▼', shiftKey: '▼', code: 'ArrowDown' },
  { key: '►', shiftKey: '►', code: 'ArrowRight' },
  { key: 'Ctrl', shiftKey: 'Ctrl', code: 'ControlRight' },
];

const keyboardKeysRu = [
  { key: 'ё', shiftKey: 'Ё', code: 'Backquote' },
  { key: '1', shiftKey: '!', code: 'Digit1' },
  { key: '2', shiftKey: '"', code: 'Digit2' },
  { key: '3', shiftKey: '№', code: 'Digit3' },
  { key: '4', shiftKey: ';', code: 'Digit4' },
  { key: '5', shiftKey: '%', code: 'Digit5' },
  { key: '6', shiftKey: ':', code: 'Digit6' },
  { key: '7', shiftKey: '?', code: 'Digit7' },
  { key: '8', shiftKey: '*', code: 'Digit8' },
  { key: '9', shiftKey: '(', code: 'Digit9' },
  { key: '0', shiftKey: ')', code: 'Digit0' },
  { key: '-', shiftKey: '_', code: 'Minus' },
  { key: '=', shiftKey: '+', code: 'Equal' },
  { key: 'Backspace', shiftKey: 'Backspace', code: 'Backspace' },
  { key: 'Tab', shiftKey: 'Tab', code: 'Tab' },
  { key: 'й', shiftKey: 'Й', code: 'KeyQ' },
  { key: 'ц', shiftKey: 'Ц', code: 'KeyW' },
  { key: 'у', shiftKey: 'У', code: 'KeyE' },
  { key: 'к', shiftKey: 'К', code: 'KeyR' },
  { key: 'е', shiftKey: 'Е', code: 'KeyT' },
  { key: 'н', shiftKey: 'Н', code: 'KeyY' },
  { key: 'г', shiftKey: 'Г', code: 'KeyU' },
  { key: 'ш', shiftKey: 'Ш', code: 'KeyI' },
  { key: 'щ', shiftKey: 'Щ', code: 'KeyO' },
  { key: 'з', shiftKey: 'З', code: 'KeyP' },
  { key: 'х', shiftKey: 'Х', code: 'BracketLeft' },
  { key: 'ъ', shiftKey: 'Ъ', code: 'BracketRight' },
  { key: '\\', shiftKey: '/', code: 'Backslash' },
  { key: 'Del', shiftKey: 'Del', code: 'Delete' },
  { key: 'Caps Lock', shiftKey: 'Caps Lock', code: 'CapsLock' },
  { key: 'ф', shiftKey: 'Ф', code: 'KeyA' },
  { key: 'ы', shiftKey: 'Ы', code: 'KeyS' },
  { key: 'в', shiftKey: 'В', code: 'KeyD' },
  { key: 'а', shiftKey: 'А', code: 'KeyF' },
  { key: 'п', shiftKey: 'П', code: 'KeyG' },
  { key: 'р', shiftKey: 'Р', code: 'KeyH' },
  { key: 'о', shiftKey: 'О', code: 'KeyJ' },
  { key: 'л', shiftKey: 'Л', code: 'KeyK' },
  { key: 'д', shiftKey: 'Д', code: 'KeyL' },
  { key: 'ж', shiftKey: 'Ж', code: 'Semicolon' },
  { key: 'э', shiftKey: 'Э', code: 'Quote' },
  { key: 'Enter', shiftKey: 'Enter', code: 'Enter' },
  { key: 'Shift', shiftKey: 'Shift', code: 'ShiftLeft' },
  { key: 'я', shiftKey: 'Я', code: 'KeyZ' },
  { key: 'ч', shiftKey: 'Ч', code: 'KeyX' },
  { key: 'с', shiftKey: 'С', code: 'KeyC' },
  { key: 'м', shiftKey: 'М', code: 'KeyV' },
  { key: 'и', shiftKey: 'И', code: 'KeyB' },
  { key: 'т', shiftKey: 'Т', code: 'KeyN' },
  { key: 'ь', shiftKey: 'Ь', code: 'KeyM' },
  { key: 'б', shiftKey: 'Б', code: 'Comma' },
  { key: 'ю', shiftKey: 'Ю', code: 'Period' },
  { key: '.', shiftKey: ',', code: 'Slash' },
  { key: '▲', shiftKey: '▲', code: 'ArrowUp' },
  { key: 'Shift', shiftKey: 'Shift', code: 'ShiftRight' },
  { key: 'Ctrl', shiftKey: 'Ctrl', code: 'ControlLeft' },
  { key: 'Win', shiftKey: 'Win', code: 'MetaLeft' },
  { key: 'Alt', shiftKey: 'Alt', code: 'AltLeft' },
  { key: 'Space', shiftKey: 'Space', code: 'Space' },
  { key: 'Alt', shiftKey: 'Alt', code: 'AltRight' },
  { key: '◄', shiftKey: '◄', code: 'ArrowLeft' },
  { key: '▼', shiftKey: '▼', code: 'ArrowDown' },
  { key: '►', shiftKey: '►', code: 'ArrowRight' },
  { key: 'Ctrl', shiftKey: 'Ctrl', code: 'ControlRight' },
];

class Button {
  constructor({
                keyEn,
                shiftKeyEn,
                keyRu,
                shiftKeyRu,
                code,
              }) {
    this.keyEn = keyEn;
    this.shiftKeyEn = shiftKeyEn;
    this.keyRu = keyRu;
    this.shiftKeyRu = shiftKeyRu;
    this.code = code;
  }

  // Создаем генератор кнопок
  generateButton() {
    let templateEn = '';
    let templateRu = '';
    const button = document.createElement('div');
    button.className = 'keyboard-key';
    button.classList.add(`${this.code}`);

    const spanEn = document.createElement('div');
    spanEn.className = 'En';
    const spanRu = document.createElement('div');
    spanRu.className = 'Ru';

    if (this.keyEn) {
      (templateEn += `<span class='down-key key'>${this.keyEn}</span>`);
    }
    if (this.shiftKeyEn) {
      (templateEn += `<span class='shift-key key hidden'>${this.shiftKeyEn}</span>`);
    }

    if (this.keyRu) {
      (templateRu += `<span class='down-key key'>${this.keyRu}</span>`);
    }
    if (this.shiftKeyRu) {
      (templateRu += `<span class='shift-key key hidden'>${this.shiftKeyRu}</span>`);
    }

    spanEn.innerHTML = templateEn;
    spanRu.innerHTML = templateRu;

    // добавляем элементы spanEn и spanRu внутрь элемента button
    button.appendChild(spanEn);
    button.appendChild(spanRu);

    return button;
  }
}

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
