console.log("test");

$(document).ready(function(){

  var thing = document.getElementById('thing');


  $('button').click(function(){
      // console.log(this);
      console.log($(this).attr('Todo'));

      var whatToDo = $(this).attr('Todo');
      if(whatToDo == 'hide'){
          $('#thing').hide();

      }else if(whatToDo == 'show'){
			     $('#thing').show();

		  }else if(whatToDo == 'toggle'){
			     $('#thing').toggle();
		}




  });


  // console.log(thing);


//
// $(window).on("load", function(){});


});
