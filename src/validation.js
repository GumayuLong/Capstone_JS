function Validation(){
    this.checkRong = function(value, errorId, mess){
        if (value === ""){
            getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";
            return false;
        }
			// True
            getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";
            return true;
    };
    
    this.typeCheck = function (idSelect, errorId, mess) {
		var selectType = document.getElementById(idSelect);
		if (selectType.selectedIndex !== 0) {
			//true
			getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";

			return true;
		}
			//false
			getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";

			return false;
	};  
    
    this.checkNumber = function (value, errorId, mess) {
		var letter = "^[0-9]+$";

		if (value.match(letter)) {
			//true
			getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";

			return true;
		}
			//false
			getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";

			return false;
	};

	// // Validation nameProduct
	// this.checkProductExist = function (value, errorId, mess, list) {
    //     var isExist = false;
    
    //     for (var i = 0; i < list.length; i++) {
    //         var product = list[i];
    //         if (product.tenSP === value) {
    //         isExist = true;
    //         break;
    //         }
    //     }

    // if (isExist) {
    //     getEle(errorId).innerHTML = mess;
    //     getEle(errorId).style.display = "block";

    //     return false;
    //     }

    //     getEle(errorId).innerHTML = "";
    //     getEle(errorId).style.display = "none";

    //     return true;
    // };
}