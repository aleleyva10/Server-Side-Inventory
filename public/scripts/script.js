$(onReady);

function onReady() {
    console.log('inside onReady');

    $('#viewInventoryButton').on('click', buttonClicked);

    getInventory();





}

function buttonClicked() {
    console.log('button was clicked');
    var objectInventory = {
        inventory: $('#newInventoryInput').val()
    };

    console.log('object to send ', objectInventory);

    $.ajax({
      type: 'POST',
      url: '/newInventory',
      data: objectInventory,
      success: function( response ){
        console.log( 'back from post:', response );
        // when back from server update display
        getInventory();
      } // end success
    }); //end ajax


}








var getInventory = function(){
  // ajax call to get songs
  $.ajax({
    type: 'GET',
    url: '/inventory',
    success: function( response ){
      console.log( 'back from server with:', response );
      $( '#outputInventory' ).empty();
      for (var i = 0; i < response.inventory.length; i++) {
        $( '#outputInventory' ).append( '<p>' + response.inventory[i].inventory + '</p>' );
      }
    }
  }); //end object
}; // en
