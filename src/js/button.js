export class Button {
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
