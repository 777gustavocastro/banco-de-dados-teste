document.addEventListener("DOMContentLoaded", () => {
  fetch("data/empresas.json") // Busca o JSON da pasta 'data'
    .then((response) => response.json())
    .then((data) => renderEmpresas(data));
});

function renderEmpresas(empresas) {
  const empresaList = document.getElementById("empresa-list");
  empresaList.innerHTML = empresas
    .map(
      (empresa) => `
      <div class="card">
        <img src="images/${empresa.logo}" alt="Logo de ${empresa.nome}">
        <h2>${empresa.nome}</h2>
        <p>${empresa.local}</p>
        <p><strong>Setor:</strong> ${empresa.setor}</p>
        <p><strong>Contato:</strong> ${empresa.contato}</p>
        <div class="status">
          <div class="status-circle ${
            empresa.ativo ? "status-online" : "status-offline"
          }"></div>
          <span>${empresa.ativo ? "No ar" : "Inativa"}</span>
        </div>
      </div>
    `
    )
    .join("");
}
