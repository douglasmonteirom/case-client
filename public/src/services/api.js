import { API_URL } from '../constants.js';

export async function analyzeEmail(formData) {
  const resp = await fetch(API_URL, { method: 'POST', body: formData });
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`Falha na API (${resp.status}): ${text}`);
  }
  return await resp.json(); // { category: "Produtivo"|"Improdutivo", suggestion: "..." }
}
