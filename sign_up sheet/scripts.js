// console.log("test")

$(document).ready(function(){

  // new jquery method...submit
  $('.body-wrapper').submit(function(event){
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

      var password = $('.password').val();
      var password2 = $('.password2').val();
      if(password !== password2){
        $('.password-error').html('Your passwords do not match')
      }
      //force user to have anumber in the password
      //keep track of numberFound as a boolean

      var numberFound = false;
      for(let i = 0; i < password.length; i++){
          if(isNaN(Number(password[i]))){
            //this is not a number
            continue;
          }else{
              //this is a number
              numberFound = true;
          }


      }

      if(!numberFound){
          $('.password-error').html('Your password must contain a number');

      }
      // console.log($('.password').val());




  });




});
