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
  var outputString;
  outputString = inputString.replace(/[\?\!\ \.\,]+/g, "");



  return outputString;
}
