
$(function (){
  // On ajoute l'evenement mouseover à notre element ID "img1 pour qu au passage de la souris l'evenement puisse se produire
  $('#text').mouseover(function(){
    // Au moment ou j active cet evenement .mouseover , refaire un tag element Id "TEXT"
    $('#text').css('color', 'red');
    // en css evenement (.css) afin que l'image passe à couloir rouge
  })
});


$(function (){
  // On ajoute l'evenement mouseover à notre element ID "TEXT" pour qu au passage de la souris l'evenement puisse se produire
  $('#text').mouseout(function(){
    // Au moment ou j active cet evenement .mouseout , refaire un tag element Id "TEXT"
    $('#text').css('color', 'black');
    // en css evenement (.css) afin que l'image passe à couloir noir
  })
});
