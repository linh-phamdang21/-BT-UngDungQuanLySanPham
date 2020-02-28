let productList = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhong 6S"];

function showProduct() {
    let table = "";
    for (let i = 0; i < productList.length; i++) {
        if (i % 2 === 0) {
            table += "<tr style='background-color: white'>";
            table += "<td class='td1'>" + productList[i] + "</td>";
            table += "<td class='td2'>" + "<input class='button2' type='button' id='" + i + "' value='Edit' onclick='editProduct(this.id)'>" + "</td>";
            table += "<td class='td2'>" + "<input class='button2' type='button' id='" + i + "' value='Delete' onclick='delProduct(this.id)'>" + "</td>";
            table += "</tr>";
        } else {
            table += "<tr style='background-color: antiquewhite'>";
            table += "<td class='td1'>" + productList[i] + "</td>";
            table += "<td class='td2'>" + "<input class='button2' type='button' id='" + i + "' value='Edit' onclick='editProduct(this.id)'>" + "</td>";
            table += "<td class='td2'>" + "<input class='button2' type='button' id='" + i + "' value='Delete' onclick='delProduct(this.id)'>" + "</td>";
            table += "</tr>";
        }
    }
    document.getElementById("product").innerHTML = table;
}

function addProduct() {
    let newProduct = document.getElementById("inputproduct").value;
    if (newProduct === ""){
        alert("Error");
        return;
    }
    productList.unshift(newProduct);
    document.getElementById("inputproduct").value = null;
    showProduct();
}

function editProduct(id) {
    let changeProduct = prompt("Edit Product's Name: ");
    productList[id] = changeProduct;
    showProduct();
    alert("Edited");
}

function delProduct(id) {
    checkConfirm = confirm("You want to delele this product?");
    if (checkConfirm){
        productList.splice(id,1);
        showProduct()
    }
}