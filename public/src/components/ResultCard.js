// src/components/ResultCard.js

export class ResultCard {
  constructor(cardId) {
    this.cardEl = document.getElementById(cardId);
    if (!this.cardEl) throw new Error(`ResultCard: elemento com ID "${cardId}" não encontrado.`);
    this.suggestionEl = this.cardEl.querySelector('#suggestion');
    if (!this.suggestionEl) throw new Error('ResultCard: elemento de sugestão não encontrado.');
  }

  setSuggestion(text) {
    this.suggestionEl.textContent = text || '—';
  }

  show() {
    this.cardEl.style.display = 'block';
  }

  hide() {
    this.cardEl.style.display = 'none';
  }
}
