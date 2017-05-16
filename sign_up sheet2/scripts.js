console.log("test");

$(document).ready(function(){

  // new jquery method...submit
  $('.mainform-wrapper').submit(function(event){
      //submit this for form submissions

      $('.error').each(function(){
          $(this).html('');

      });

      event.preventDefault();
      console.log("User submitted the form!");
      $('input').each(function(){
          var currentInputTagClass = $(this).attr('class');
          var errorDivClassName = '.' + currentInputTagClass + '-error';
          //target each input tag
          //input tags have .val()
          //everything else has .html() - innerHtml
          if($(this).val() == ''){
              console.log("User did not enter enough information");
              $(errorDivClassName).html('Field cannot be empty.');
          }
      });

    });

});
