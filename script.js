document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  document.getElementById('fileName').textContent = file ? file.name : "Aucun fichier sélectionné";

  // Données simulées pour l'exemple
  const dummyData = [
    { element: "Mur extérieur", qty: 35.2, unit: "m²" },
    { element: "Dalle béton", qty: 12.8, unit: "m³" },
    { element: "Plinthes", qty: 54, unit: "ml" }
  ];

  const tbody = document.getElementById("resultsBody");
  tbody.innerHTML = "";
  dummyData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.element}</td><td>${row.qty}</td><td>${row.unit}</td>`;
    tbody.appendChild(tr);
  });
});
