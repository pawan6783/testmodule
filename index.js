//reverse the string
exports.revert = function(str){

    if(str==" ")
    return "empty string";
    
    return str.split("").reverse().join("");

}

//console.log(this.revert("hello"));