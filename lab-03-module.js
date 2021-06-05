/*
    CIT 281 Lab 3
    Name: Edwin Gutierrez
*/

//  reverseString function to the module.exports object
module.exports = {
    reverseString,
    concatenateString: function(strInput) {
        return strInput + strInput;
    }
};

function reverseString(str){
  return [...str].reverse().join('');
}