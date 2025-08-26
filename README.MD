# Email Analyzer Frontend

Front-end da aplicação **Classificador de E-mails (Produtivo x Improdutivo)**.  
Permite enviar textos ou arquivos (.txt/.pdf) para a API de classificação e exibir a categoria e sugestão de resposta automática.

---

## Link do Back-end

[Case Server API](https://case-server.onrender.com/)

---

## Estrutura do projeto

```
├──public/
│    ├── index.html
│    ├── src/
│    │   ├── main.js # Entrada JS
│    │   ├── constants.js # URL da API
│    │   ├── mais.js # Inicializa componentes
│    │   ├── components/ # Componentes da UI
│    │   │     ├── form.js
│    │   │     ├── Badge.js
│    │   │     └── ResultCard.js
│    │   ├── services/ # Chamadas à API
│    │   │     └── api.js
│    │   ├── utils/ # Funções utilitárias
│    │   │     └── dom.js
│    │   └── styles/ # CSS
│    │         ├── variables.css
│    │         ├── base.css
│    │         └── components.css
└──README.md

```


---

## Funcionalidades

- Enviar texto manual ou arquivo (.txt ou .pdf) para a API.  
- Exibir categoria do e-mail: **Produtivo** ou **Improdutivo**.  
- Exibir sugestão automática de resposta gerada pelo OpenAI.  
- Interface responsiva e limpa, compatível com dispositivos móveis.  

---

## Instalação e execução local

1. Clone o repositório:
```bash
git clone https://github.com/douglasmonteirom/case-client.git
cd case-client
```
2. Instale um servidor local simples (opcional):
```bash
# usando npm
npm install -g serve
```
3. Execute a aplicação localmente:
```bash
# usando npm
serve -s public
```
4. Abra o navegador em http://localhost:5000 (ou a porta exibida pelo serve).

- Certifique-se de que o Back-end esteja rodando localmente ou na nuvem para a API funcionar.

## Estilos

- Variáveis CSS globais definidas em variables.css para cores, bordas e temas de categoria.

- Base e componentes separados (base.css e components.css) para melhor organização.

## Observações

- Nenhum dado é armazenado no front-end.

- A comunicação é feita via fetch para a API de classificação.

- O front depende do back-end disponível em API_URL definido em constants.js.

*Autor: Douglas Monteiro*

*Última atualização: Agosto 2025*