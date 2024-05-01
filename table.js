loadboards();

function loadboards() {
    for (let i = 15; i > 0; i--) {
        let newRow = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = i;
        newRow.appendChild(cell1);
        let cell2 = document.createElement("td");
        cell2.textContent = "제목";
        newRow.appendChild(cell2);
        let cell3 = document.createElement("td");
        cell3.textContent = "작성자";
        newRow.appendChild(cell3);
        let cell4 = document.createElement("td");
        cell4.textContent = Math.floor(Math.random() * 1000) + 1;
        newRow.appendChild(cell4);
        let cell5 = document.createElement("td");
        cell5.textContent = Math.floor(Math.random() * 1000) + 1;
        newRow.appendChild(cell5);
        let cell6 = document.createElement("td");
        cell6.textContent = "2024-05-01";
        newRow.appendChild(cell6);
        let tbody = document.querySelector("tbody");
        tbody.appendChild(newRow);
    }
}
