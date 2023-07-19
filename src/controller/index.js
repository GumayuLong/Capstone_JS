var api = new Service();

function getEle (id){
    return document.getElementById(id);
}

function getListProduct(){
    var promise = api.getListProductApi();

    promise
        .then(function(result){
            renderUI(result.data);
        })
        .catch(function(err){
            console.log(err);
        })
}
getListProduct();

function renderUI(data){
    var content = "";
    for (var i = 0; i < data.length; i++){
        var product = data[i];

        content += `
            <tr>
                <td>${i + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td>
                    <img src="${product.img}" width="50">
                </td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="updateProduct(${
						product.id
					})">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${
						product.id
					})">Xóa</button>
                </td>
            </tr>
        `;
    }
    getEle("tblDanhSachSP").innerHTML = content;
}

function addProduct(){
    var tenSP = getEle("TenSP").value;
    var gia = getEle("GiaSP").value;
    var screen = getEle("manHinh").value;
    var cameraSau = getEle("camerasau").value;
    var cameraTruoc = getEle("cameratruoc").value;
    var hinhAnh = getEle("HinhSP").value;
    var moTa = getEle("MoTa").value;
    var loai = getEle("loaiSP").value;

    var product = new Product("", tenSP, gia, screen, cameraSau, cameraTruoc, hinhAnh, moTa, loai);
    var promise = api.addProductApi(product);
    promise
        .then(function(){
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(err){
            console.log(err);
        })
}

function deleteProduct(id){
    var promise = api.deleteProductApi(id);
    promise
        .then(function(result){
            alert(`Delete ${result.data.name} successfully`);
            getListProduct();
        })
        .catch(function(err){
            console.log(err);
        })
}

function updateProduct(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Chỉnh sửa sản phẩm";
    var buttonEdit = `<button class="btn btn-warning" onclick="updateUI(${id})">Cập nhật</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = buttonEdit;

    // Lấy thông tin
    var promise = api.getProductById(id);
    promise
        .then(function(result){
            getEle("TenSP").value = result.data.name;
			getEle("GiaSP").value = result.data.price;
			getEle("manHinh").value = result.data.screen;
			getEle("camerasau").value = result.data.backCamera;
			getEle("cameratruoc").value = result.data.frontCamera;
			getEle("HinhSP").value = result.data.img;
			getEle("MoTa").value = result.data.desc;
			getEle("loaiSP").value = result.data.type;
        })
        .catch(function(err){
            console.log(err);
        })
}

function updateUI(id){
    var tenSP = getEle("TenSP").value;
    var GiaSP = getEle("GiaSP").value;
    var screen = getEle("manHinh").value;
    var backCamera = getEle("camerasau").value;
    var frontCamera = getEle("cameratruoc").value;
    var Img = getEle("HinhSP").value;
    var Desc = getEle("MoTa").value;
    var Type = getEle("loaiSP").value;

    var product = new Product(
		id,
		tenSP,
		GiaSP,
		screen,
		backCamera,
		frontCamera,
		Img,
		Desc,
		Type
	);
    var promise = api.updateProductApi(product);
    promise
        .then(function(){
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(err){
            console.log(err)
        })
}

// thêm button add
getEle("btnThemSP").onclick = function(){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm sản phẩm";
    var buttonAdd = `<button class="btn btn-success" onclick="addProduct()">Thêm</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = buttonAdd;
};