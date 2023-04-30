export class Button {
  constructor({ key, shiftKey, code }) {
    this.key = key;
    this.shiftKey = shiftKey;
    this.code = code;
  }

  // Создаем генератор кнопок
  generateButton() {
    let template = '';
    const button = document.createElement('button');
    button.className = 'keyboard-key';
    button.classList.add(`${this.code}`)

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
