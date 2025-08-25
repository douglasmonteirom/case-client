export class Badge {
  constructor(elementId) {
    this.el = document.getElementById(elementId);
    if (!this.el) throw new Error(`Badge: elemento com ID "${elementId}" não encontrado.`);
  }

  setCategory(category) {
    const c = (category || '').toLowerCase();
    this.el.textContent = category || '—';
    this.el.classList.remove('ok', 'warn');

    if (c === 'produtivo') this.el.classList.add('ok');
    else if (c === 'improdutivo') this.el.classList.add('warn');
  }
}
