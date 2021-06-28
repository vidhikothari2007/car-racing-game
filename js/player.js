class Player{
    contructor(){

    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on('value', function(data){
            playerCount= data.val()
        });

    }
    updateCount()
}