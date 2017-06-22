$( document ).ready(function() {
  $('#btnRecipe').on('click', function() {
    console.log('recipe....');
    var tweetText = $('#txtTwitter');
    var ingredientLinesDom = $('#ingredientLines');
    var tweetLoader = $('#tweetLoader');
    var food = tweetText.val();
    var foodArray = food.match(/:\w+/g);
    var foodToSend = foodArray[0].replace(':', '');
    foodToSend = foodToSend.replace('_', ' ');
    foodToSend = encodeURIComponent(foodToSend);
    console.log(foodToSend);

    tweetLoader.addClass('active');
    $.get( "/recipes/", {
      food: foodToSend
    }, function( resp ) {
      // var recipes = resp[0].recipe.ingredientLines.join(',');
      var recipes = resp[0].recipe.url;
      var ingredientLines = resp[0].recipe.ingredientLines.join(',');
      ingredientLinesDom.val(ingredientLines);
      tweetText.val(food.replace(/:/g, '').replace('_', ' ') + ' ' + recipes);
      console.log(recipes); // server response
      tweetLoader.removeClass('active');
    });
  });
});