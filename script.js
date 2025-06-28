document.getElementById('fileInput').addEventListener('change', async function(event) {
  const file = event.target.files[0];
  const fileNameElement = document.getElementById('fileName');
  const resultsBody = document.getElementById("resultsBody");

  if (!file) {
    fileNameElement.textContent = "Aucun fichier sélectionné";
    return;
  }

  fileNameElement.textContent = file.name;
  resultsBody.innerHTML = "<tr><td colspan='3'>Analyse en cours...</td></tr>";

  // Préparer le fichier à envoyer
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://hook.eu2.make.com/xaojp8n2xptvc358tttt74jl3xa0kgwg", {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error("Erreur du serveur Make");

    const result = await response.json();

    resultsBody.innerHTML = "";

    result.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.element}</td><td>${row.qty}</td><td>${row.unit}</td>`;
      resultsBody.appendChild(tr);
    });

  } catch (error) {
    resultsBody.innerHTML = `<tr><td colspan="3">Erreur : ${error.message}</td></tr>`;
  }
});
