export class Button {
  constructor({ key, shiftKey, keyCode }) {
    this.key = key;
    this.shiftKey = shiftKey;
    this.keyCode = keyCode;
  }

  // Создаем генератор кнопок
  generateButton() {
    let template = '';
    const button = document.createElement('button');
    button.className = 'keyboard-key';
    button.setAttribute('key-сode', this.keyCode);

    if (this.shiftKey) {
      (template += `<span class='shift-key'>${this.shiftKey}</span>`);
    }

    if (this.key) {
      (template += `<span class='key'>${this.key}</span>`);
    }

    button.innerHTML = template;

    return button;
  }
}
