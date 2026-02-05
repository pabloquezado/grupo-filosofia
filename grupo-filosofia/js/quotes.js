export async function initQuotes() {
    const container = document.getElementById("quotes-container");
  
    async function loadQuote() {
      try {
        const response = await fetch(
          "https://philosophyapi.pythonanywhere.com/api/"
        );
        const data = await response.json();
  
        container.innerHTML = `
          <blockquote>
            “${data.quote}”
            <footer>— ${data.author}</footer>
          </blockquote>
        `;
      } catch (err) {
        container.innerHTML = "<p>Erro ao carregar citação.</p>";
      }
    }
  
    loadQuote();
    setInterval(loadQuote, 15000);
  }
  