// //Check off specific Todos by clicking
// $('ul').on("click", "li", function(){ // when an li inside of a ul is clicked run the call back function code
//     $(this).toggleClass("completed");
// });


// //Click on X to delete Todo
// $('ul').on("click", "span", function(event){ // when a span inside of a ul is clicked run the call back function code
//     $(this).parent().fadeOut(500,function(){  //.parent refers to the spans parent which is the li
//     $(this).remove(); //used .remove so that li is completely removed and not just having a display as none
//     });
//     event.stopPropagation();
// });

// //Add new todo
// $("input[type='text'").keypress(function(event){
//     if(event.which === 13){ 
//         //Grabbing new todo text from input	
//         var todoText = $(this).val();
//         //clear out input
//         $(this).val("");
//         //create a new li & span and add to ul
//         $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
        
//     }
// });

// //fade out input when plus button is clicked
// $(".fa-pencil-alt").click(function(){ 
//     $("input[type='text'").fadeToggle(500);
// });
    


    

