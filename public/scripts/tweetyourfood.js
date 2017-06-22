$( document ).ready(function() {
  $('#btnRecipe').on('click', function() {
    console.log('recipe....');
    var tweetText = $('#txtTwitter');
    var food = tweetText.val();
    var foodArray = food.match(/:\w+/g);
    var foodToSend = foodArray[0].replace(':', '');
    console.log(foodToSend);
    $.get( "/recipes/", {
      food: foodToSend
    }, function( resp ) {
      // var recipes = resp[0].recipe.ingredientLines.join(',');
      var recipes = resp[0].recipe.url;
      tweetText.val(food.replace(/:/g, '') + ' ' + recipes);
      console.log(recipes); // server response
    });
  });
});