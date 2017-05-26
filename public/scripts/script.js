$(onReady);

function onReady() {
    console.log('inside onReady');

    $("#SearchDiv").hide();
    $('#viewInventoryButton').on('click', buttonClicked);
    $('#searchButton').on('click', searchButtonClicked);
    $('#clearButton').on('click', clearButtonClicked);

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


    $("#newInventoryInput").val('');
}//end of buttonClicked

function getInventory() {
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
} // end of getInventory


function searchButtonClicked() {
    console.log('searchButtonClicked clicked');
    // $("#outputInventory").hide();
    $("#SearchDiv").show();

    var searchInventory = {
        search:$("#checkInventoryInput").val(),
    };



    $.ajax({
        type:'GET',
        url:  '/inventory',

        success: function ( response ) {
            console.log('this is our response', response);



            var valueInput = $('#checkInventoryInput').val();
            for (var i = 0; i < response.inventory.length; i++) {
                if (valueInput === response.inventory[i].inventory) {
                    console.log('found result');
                    console.log(response.inventory[i].inventory);
                    $('#SearchDiv').append("<p>" + response.inventory[i].inventory   + "</p>");

                }
                else {
                    console.log('not found');
                    $("#checkInventoryInput").val('');

                }//end of if else
            }//end of for loop
        }//end of success
    });//end of ajax


}//end of the function



function searchInventory() {
    console.log('inside search inventory');
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

}


function clearButtonClicked() {
    console.log('inside clear');
    $('#outputInventory').empty();
    $('#SearchDiv').empty();
}
