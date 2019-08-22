//frontend
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var inputString = $("input#inputText").val();
    var output = encryptor(inputString);
    $("p#output").text("encoded message =" + output);


  });

});

//backend
function encryptor(inputString) {
  var newString = inputString.replace(/[\?\!\ \.\,\']+/g, "");
  var length = newString.length;
  console.log(length)
;  var cols = Math.ceil(Math.sqrt(length));
  console.log(cols);
  var rows = Math.ceil(length / cols);
  console.log(rows);
  var outputString = "";
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows * cols; j += cols -1){
      outputString += newString[j+i];
    }
  }









  return outputString;
}
