function search() {
    document.querySelectorAll(".radio_type").forEach(function(radio) {radio.checked = false;});
    const orderNumber = document.getElementById("searchInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/get_print_info/" + orderNumber);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText);
        document.getElementById("orderNumber").value = data.order_number;
        document.getElementById("companyName").value = data.company_name;
        document.getElementById("customerName").value = data.customer_name;
        document.getElementById("salespersonName").value = data.salesperson_name;
        document.getElementById("diskNumber").value = data.disk_number;
        document.getElementById("notes").value = data.notes;
    };
    xhr.send();
}
