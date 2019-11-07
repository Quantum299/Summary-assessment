$('#creatBtn').on('click',function(){
  var v=$('#fch').prop('checked') ;
  var v2=$('#sch').prop('checked') ;
  var v3=$('#tch').prop('checked') ;


  if($('#fch').prop('checked')  && $('#sch').prop('checked') && $('#tch').prop('checked') ){
    $('#theList').append("<li class= 'black'> black</li>")
   
