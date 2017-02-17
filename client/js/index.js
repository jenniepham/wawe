$(document).ready(function(){
   
var categories = ["Asian fusion", "Barbeque", "Breakfast & Brunch", "Buffet", "Burger", "Cajun", 
                  "Carribean", "Chicken Wings", "Cuban", "Fast Food", "Fish & Chips", "French", "Greek", 
                  "Indian", "Indonesian", "Italian", "Japanese", "Kebab", "Korean", "Mediterranean", "Mexican", "Middle Eastern",
                  "Mongolian", "Pizza", "Russian", "Sandwiches", "Seafood", "Southern", "Steakhouse",
                  "Tex-Mex", "Thai", "Vietnamese", "Waffles"];
                  


var result = [];

function update(result){
    $('.result').empty();
    result.forEach(function(a){
       $('.result').append("<button class='choice'>" + a + "</button> <button class='remove' value='" + a + "'>X</button>"  + "<br>");
   });
}

$('#generate').on('click', function(){
    
   
   result = [];
   var numppl = document.getElementById("numppl");
   var numPPL = numppl.value;
   numPPL = parseInt(numPPL);
   if(numPPL>10){
       $('#instruction').html("<p class='text'>There are too many of you. Regardless of how we do this, at least one person will be unhappy. "
       + "So, here are even less choices. Let the most picky people remove all but one item.</p>");
       numPPL = 4;
   }
   else if(numPPL==1){
        $('#instruction').html("<p class='text'>You have two choices. Discard one.</p>");
   }
   else{
   $('#instruction').html("<p class='text'>Everyone must take turn and remove one item.</p>");
   }
   var i = 0;
      while (i<=numPPL){
       var index = Math.random()*categories.length;
       index = Math.floor(index);
       var food = categories[index];
       if (result.indexOf(food) == -1){
       result.push(food);
       i++;
       }
       
   }
   
   update(result);
   
   $('.remove').on('click', function(){
   var value = $(this).attr("value");
   var remIndex = result.indexOf(value);
   result.splice(remIndex,1);
   $(this).attr("style","visibility:hidden");
   
   if(result.length == 1){
      $('.result').html("<button class='choice'>" + result[0] + "</button> <button class='final'><<</button>"  + "<br>");
      $('.result').append("<br><br><p class='text'>Enter your location to find " + result[0] + " restaurants near you.</p><br>");
      $('.result').append("<input id='search' type='text'/> ");
      $('.result').append(" <button id='yelp'>Yelp!</button>");
   }
   
   $('#yelp').on('click',function(){
       var location = $('#search').val();
       var food = result[0];
       if (food == 'Fish & Chips'){
           food = 'fishnchips';
       }
       else if (food == 'Chicken Wings'){
           food = 'chicken_wings';
       }
       window.open("https://www.yelp.com/search?find_desc=Restaurants&find_loc=" + location + "&start=0&cflt=" + food);
       
   });
   
});



 
});    




});