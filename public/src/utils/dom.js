// src/utils/dom.js

export function showError(msg) {
  const errorEl = document.getElementById('error');
  const resultCard = document.getElementById('resultCard');
  
  if (errorEl) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
  }

  if (resultCard) {
    resultCard.style.display = 'none';
  }
}

export function hideError() {
  const errorEl = document.getElementById('error');
  if (errorEl) errorEl.style.display = 'none';
}
