class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html('WELCOME TO THE CAR RACING GAME')
        title.position(120,15);

        var input=createInput('name');
        input.position(150,50);
        var button=createButton('Play');
        button.position(150,75);

        var greeting= createElement('h2');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('hello ' +name);
            greeting.position(150,50);
        })

    }
}