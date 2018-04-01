
$(document).ready(function(){
    var ori_pos4lf = $("[class=object-4]").offset().left; 
    var ori_pos4tp = $("[class=object-4]").offset().top; 
    var ori_pos5lf = $("[class=object-5]").offset().left;  
    var ori_pos5tp = $("[class=object-5]").offset().top;  
    var ori_pos6lf = $("[class=object-6]").offset().left; 
    var ori_pos6tp = $("[class=object-6]").offset().top;  
    var body_width = $("body").width(); 
    var body_height = $("body").height(); 
   //  var moveX = Math.floor(body_width * .05); fixed moving! 
      // Random Number 
     //Math.floor(Math.random()*5)
    var moveX = Math.floor(body_width * .01);
    var moveY = Math.floor(body_height * .01); 
    var closenessFactor= 3; 


 $(".full-bleed").mouseleave(function(){
 });

    // shapes
    $("[class^=object-]").mouseenter(function(e){
      var className = $(this).attr('class'); 
      var classNumber = Math.floor(Number(className.replace("object-", ""))); 
      var this_obj = $(this).offset(); 
      var left = this_obj.left; 
      var top = this_obj.top; 
      var left = this_obj.left; 
      var top = this_obj.top; 

      
      var to_left = e.pageX; 
      var to_top = e.pageY; 

      switch (classNumber) {
        case 4:
            if (to_left >= body_width - (moveX * closenessFactor) || to_top >= body_height - (moveY * closenessFactor) )
                $(this).animate({left: ori_pos4lf+'px', top: ori_pos4tp+'px'});
            else
                $(this).animate({left: to_left+'px', top: to_top+'px'});
          break; 
        case 5:
            if (to_left >= body_width - (moveX * closenessFactor) || to_top >= body_height - (moveY * closenessFactor) )
                $(this).animate({left: ori_pos5lf+'px', top: ori_pos5tp+'px'});
            else
                $(this).animate({left: to_left+'px', top: to_top+'px'});
          break; 
        case 6: 
            if (to_left >= body_width - (moveX * closenessFactor) || to_top >= body_height - (moveY * closenessFactor) )
                $(this).animate({left: ori_pos6lf, top: ori_pos6tp});
            else
                $(this).animate({left: to_left+'px', top: to_top+'px'});
          break;  

      }

    
    

    });

});
