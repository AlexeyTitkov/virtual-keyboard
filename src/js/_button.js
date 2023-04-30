export class Button {
  constructor({ key, shiftKey, code }) {
    this.key = key;
    this.shiftKey = shiftKey;
    this.code = code;
  }

  // Создаем генератор кнопок
  generateButton() {
    let template = '';
    const button = document.createElement('div');
    button.className = 'keyboard-key key';
    button.classList.add(`${this.code}`)

    if (this.shiftKey) {
      (template += `<span class='shift-key hidden'>${this.shiftKey}</span>`);
    }

    if (this.shiftKey) {
      (template += `<span class='caps-key hidden'>${this.shiftKey}</span>`);
    }

    if (this.shiftKey) {
      (template += `<span class='caps-shift-key hidden'>${this.key}</span>`);
    }

    if (this.key) {
      (template += `<span class='key'>${this.key}</span>`);
    }

    button.innerHTML = template;

    return button;
  }
}
