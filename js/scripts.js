var input =[];
var words = [];
var vowels =['a','e','i','o','u','A','E','I','O','U'];

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    var words = $("input#sentence").val();
    input = words.split("");
    $('#off').show();
    for(var i=0; i<input.length; i++){
      for(var h=0; h<vowels.length; h++){
        if(input[i]==vowels[h]){
          input[i]="-";
        }
      }

    }
    alert(input.join(''));
});
});
