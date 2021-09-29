let product = [
    ["iphone 13", 20000000, "Apple"],
    ["iphone 8", 1000000, "Apple"],
    ["Galaxy Note 8", 12000000, "Samsung"],
    ["Vsmart Joy 3", "4000000", "Vsmart"]
];


/* ---------------- show Product List ----------------- */
function showListProduct() {
    let html = '';
    for (let i = 0; i < product.length; i++) {
        html += '<tr>';
        html += '<td>' + (i + 1) + '</td>';
        let index = product.indexOf(product[i]);
        for (let j = 0; j < product[0].length; j++) {
            html += '<td>' + product[i][j] + '</td>';
        }
        html += '<td>' +
            '<button onclick="editItem(' + index + ')"><i class="far fa-edit"></i> Edit</button>' +
            '<button onclick="delItem(' + index + ')" id="delItem"><i class="fas fa-trash-alt"></i> Delete</button>' +
            '</td>';
        html += '</tr>'
    }
    document.getElementById('product-list').innerHTML = html;
}

showListProduct();


/* ---------------- Delete Item ----------------- */
function delItem(index) {
    product.splice(index, 1);
    showListProduct();
}


/* ---------------- Insert Item ----------------- */
function insertProduct() {
    let itemPro = [];
    let namePro = document.getElementById('proName').value;
    let pricePro = +document.getElementById('proPrice').value;
    let brandPro = document.getElementById('proBrand').value;
    if (!namePro) {
        alert("Chưa nhập tên SP");
    } else if (!pricePro) {
        alert("Chưa nhập giá SP");
    } else if (!brandPro) {
        alert("Chưa Nhập hãng");
    } else {
        itemPro.push(namePro, pricePro, brandPro);
        product.push(itemPro);
        clearInput();
        showListProduct();
    }
}


/* ---------------- show edit Item ----------------- */
function editItem(index) {
    document.getElementById('insertPro').hidden = true;
    document.getElementById('updatePro').hidden = false;
    document.getElementById('indexItem').value = index;
    document.getElementById('proName').value = product[index][0];
    document.getElementById('proPrice').value = product[index][1];
    document.getElementById('proBrand').value = product[index][2];
}


/* ---------------- Update Item Product List ----------------- */
function updateProduct() {
    let indexItems = document.getElementById('indexItem').value;
    let updateItemName = document.getElementById('proName').value;
    let updateItemPrice = document.getElementById('proPrice').value;
    let updateItemBrand = document.getElementById('proBrand').value;
    if (!updateItemName) {
        alert("Chưa nhập tên SP");
    } else if (!updateItemPrice) {
        alert("Chưa nhập giá SP");
    } else if (!updateItemBrand) {
        alert("Chưa Nhập hãng");
    } else {
        let updateItem = [updateItemName, updateItemPrice, updateItemBrand];
        product[indexItems] = updateItem;
    }
    document.getElementById('insertPro').hidden = false;
    document.getElementById('updatePro').hidden = true;
    clearInput();
    showListProduct();
}

/* ---------------- Clear Product List ----------------- */
function clearInput() {
    document.getElementById('proName').value = '';
    document.getElementById('proPrice').value = '';
    document.getElementById('proBrand').value = '';
}