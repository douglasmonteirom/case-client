// src/components/Form.js
import { analyzeEmail } from '../services/api.js';
import { showError, hideError } from '../utils/dom.js';
import { Badge } from './Badge.js';
import { ResultCard } from './ResultCard.js';

export function initForm() {
  const form = document.getElementById('form');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btnText');

  const badge = new Badge('categoryBadge');
  const resultCard = new ResultCard('resultCard');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideError();

    submitBtn.disabled = true;
    btnText.innerHTML = '<span class="spinner"></span> Processando...';

    try {
      const fd = new FormData(form);
      const data = await analyzeEmail(fd);

      badge.setCategory(data.category);
      resultCard.setSuggestion(data.suggestion);
      resultCard.show();
    } catch (err) {
      showError(err.message || 'Erro desconhecido.');
      resultCard.hide();
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Processar';
    }
  });
}
