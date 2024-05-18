document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myform");
    const table = document.querySelector("#mytable tbody");

    let expenses = [];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById("amount").value);
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;

        const expense = { amount, category, date };
        expenses.push(expense);

        updateTable();
        form.reset();
    });

    function updateTable() {
        table.innerHTML = "";

        expenses.forEach((expense,index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td> 
                <td><button>Delete</button></td>
                <td><button>Edit</button></td>
                `;

            table.appendChild(row);
        });
        
    }
    
    

});
    



















 
