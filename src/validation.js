function Validation(){
    this.checkRong = function(value, errorId, mess){
        if (value === ""){
            getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";
            return false;
        } else {
            getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";
            close();
            return true;
        }
    };
    
    this.typeCheck = function (idSelect, errorId, mess) {
		var selectType = document.getElementById(idSelect);
		if (selectType.selectedIndex !== 0) {
			//true
			getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";

			return true;
		} else {
			//false
			getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";

			return false;
		}
	};  
    
    this.checkNumber = function (value, errorId, mess) {
		var letter = "^[0-9]+$";

		if (value.match(letter)) {
			//true
			getEle(errorId).innerHTML = "";
			getEle(errorId).style.display = "none";

			return true;
		} else {
			//false
			getEle(errorId).innerHTML = mess;
			getEle(errorId).style.display = "block";

			return false;
		}
	};
}