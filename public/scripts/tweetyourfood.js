$( document ).ready(function() {
  $('#btnRecipe').on('click', function() {
    console.log('recipe....');
    const tweetText = $('#txtTwitter');
    $.get( "/recipes/", {
      food: tweetText.val()
    }, function( resp ) {
      // var recipes = resp[0].recipe.ingredientLines.join(',');
      var recipes = resp[0].recipe.url;
      tweetText.val(tweetText.val() + ' ' + recipes);
      console.log(recipes); // server response
    });
  });
});