import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("research");

export async function renderResearch() {
  if (!container) return;

  container.innerHTML = "";

  const q = query(
    collection(db, "research"),
    orderBy("createdAt", "desc"),
    limit(3)
  );

  const snapshot = await getDocs(q);

  snapshot.forEach(docSnap => {
    renderResearchItem(docSnap);
  });
}



function renderResearchItem(docSnap) {
  const paper = docSnap.data();

  const block = document.createElement("div");
  block.className = "research-item";

  block.innerHTML = `
    <h3>${paper.journal}</h3>
    <p class="article-title">${paper.articleTitle}</p>


    ${
      paper.coverImage
        ? `<img src="${paper.coverImage}" alt="Capa do artigo">`
        : ""
    }
    
    <a href="${paper.link}" target="_blank">
      <button class="action-btn">Visualizar artigo</button>
    </a>
  `;

  container.appendChild(block);
}
