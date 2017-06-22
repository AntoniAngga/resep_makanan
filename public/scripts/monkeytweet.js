$( document ).ready(function() {
  $('#btnRecipe').on('click', function() {
    console.log('recipe....');
    $.get( "/recipes/", {
      food: 'potatoe'
    }, function( resp ) {
      // var recipes = resp[0].recipe.ingredientLines.join(',');
      var recipes = resp[0].recipe.url;
      $('#txtRecipe').val(recipes);
      console.log(recipes); // server response
    });
  });
});