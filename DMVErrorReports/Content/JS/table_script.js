function edit_row(no) {
    document.getElementById("editbtn" + no).style.display = "none";
    document.getElementById("savebtn" + no).style.display = "block";
    document.getElementById("btnCancel" + no).style.display = "block";

    var policyNumber = $("policyNumber_row" + no);
    debugger;
    var firstName = $("#firstName_row" + no);
    var lastName = $("#lastName_row" + no);
    var fullName = $("#fullName_row" + no);
    var vin = $("#vin_row" + no);
    var driverLicenseState = $("#driverLicenseState_row" + no);
    var driverLicenseNumber = $("#driverLicenseNumber_row" + no);
    var state = $("#state_row" + no);

    alert(policyNumber.val());

    var policyNumber_data = policyNumber.innerHTML;
    var firstName_data = firstName.innerHTML;
    var lastName_data = lastName.innerHTML;

    policyNumber.innerHTML = "<input type='text' id='policyNumber_text" + no + "' value='" + policyNumber_data + "'>";
    firstName.innerHTML = "<input type='text' id='firstName_text" + no + "' value='" + firstName_data + "'>";
    lastName.innerHTML = "<input type='text' id='lastName_text" + no + "' value='" + lastName_data + "'>";
}

function save_row(no) {
    debugger;
    var policyNumber = document.getElementById("policyNumber_row" + no);
    var firstName = document.getElementById("firstName_row" + no);
    var lastName = document.getElementById("lastName_row" + no);
    var fullName = document.getElementById("fullName_row" + no);
    var vin = document.getElementById("vin_row" + no);
    var driverLicenseState = document.getElementById("driverLicenseState_row" + no);
    var driverLicenseNumber = document.getElementById("driverLicenseNumber_row" + no);
    var state = document.getElementById("state_row" + no);
   

    policyNumber.innerHTML = policyNumber.value;
    firstName.innerHTML = firstName.value;
    lastName.innerHTML = lastName.value;

    document.getElementById("editbtn" + no).style.display = "block";
    document.getElementById("savebtn" + no).style.display = "none";
    document.getElementById("btnCancel" + no).style.display = "none";
}

////function delete_row(no) {
////    document.getElementById("row" + no + "").outerHTML = "";
////}

////function add_row() {
////    var new_name = document.getElementById("new_name").value;
////    var new_country = document.getElementById("new_country").value;
////    var new_age = document.getElementById("new_age").value;

////    var table = document.getElementById("data_table");
////    var table_len = (table.rows.length) - 1;
////    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

////    document.getElementById("new_name").value = "";
////    document.getElementById("new_country").value = "";
////    document.getElementById("new_age").value = "";
////}