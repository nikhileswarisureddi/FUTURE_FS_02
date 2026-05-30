function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please enter all fields");
        return;
    }

    let table = document.getElementById("leadTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = email;
    row.insertCell(2).innerText = "New";
    row.insertCell(3).innerText = "-";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}