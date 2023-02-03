document.getElementById("printBtn").addEventListener("click", function() {
    const data = {
        gui_project: document.getElementById("orderNumber").value,
        gui_crop: document.getElementById("companyName").value,
        gui_customer: document.getElementById("customerName").value,
        gui_sale: document.getElementById("salespersonName").value,
        gui_hdd_num: document.querySelector('input[name="diskType"]:checked').value + document.getElementById("diskNumber").value ,
        gui_comment: document.getElementById("notes").value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/remote_printer", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
});
