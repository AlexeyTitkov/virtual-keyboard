export class Button {
  constructor({ keyEn, shiftKeyEn, keyRu, shiftKeyRu, code }) {
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
    button.className = 'keyboard-key key';
    button.classList.add(`${this.code}`)

    const spanEn = document.createElement('span');
    spanEn.className = 'En';
    const spanRu = document.createElement('span');
    spanRu.className = 'Ru';

    if (this.keyEn) {
      (templateEn += `<span class='down-key'>${this.keyEn}</span>`);
    }
    if (this.shiftKeyEn) {
      (templateEn += `<span class='shift-key hidden'>${this.shiftKeyEn}</span>`);
    }
    if (this.shiftKeyEn) {
      (templateEn += `<span class='caps-key hidden'>${this.shiftKeyEn}</span>`);
    }
    if (this.shiftKeyEn) {
      (templateEn += `<span class='caps-shift-key hidden'>${this.keyEn}</span>`);
    }

    if (this.keyRu) {
      (templateRu += `<span class='down-key'>${this.keyRu}</span>`);
    }
    if (this.shiftKeyRu) {
      (templateRu += `<span class='shift-key hidden'>${this.shiftKeyRu}</span>`);
    }
    if (this.shiftKeyRu) {
      (templateRu += `<span class='caps-key hidden'>${this.shiftKeyRu}</span>`);
    }
    if (this.shiftKeyRu) {
      (templateRu += `<span class='caps-shift-key hidden'>${this.keyRu}</span>`);
    }

    spanEn.innerHTML = templateEn
    spanRu.innerHTML = templateRu

    // добавляем элементы spanEn и spanRu внутрь элемента button
    button.appendChild(spanEn);
    button.appendChild(spanRu);

    return button;
  }
}
