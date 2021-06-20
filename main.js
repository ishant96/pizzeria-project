 var canvas = new fabric.Canvas('myCanvas');

 player_x = 10;
 player_y = 10;

 block_image_width = 30;
 block_image_height = 30;
 
 var player_objects= "";
 var block_image_objects="";
 
 function player_update()
 {
     fabric.image.fromURL("player.png", function(img) {
         player_object = img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_objects.object.set({
             top:player_y;
             top:player_x;
         });
         canvas.add(player_object);


     });
 }

 function new_image(get_image)
 {
     fabric.image.fromURL(get_image, function(img) {
         pl_image_object = img;

         player_object.scaleToWidth(block_image_width);
         player_object.scaleToHeight(block_image_height);
         player_objects.object.set({
             top:player_y;
             top:player_x;
         });
         canvas.add(block_player_object); 


     });
 }
 window.addEventListener("keydown",my_keydown);

 function my_keydown(e)
 {
     keyPressed = e.Keycode;
     console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == '80')
 }
 {
     console.log("p and shift pressed together")
     block_image_width = block_image_width - 10;
     block_image_height = block_image_height - 10;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == '70')
    {
        new_image(spiderman_face.png);
        console.log("f")
    }

    if(keyPressed == '66')
    {
        new_image(spiderman_body.png);
        console.log("b")
    }

    if(keyPressed == '76')
    {
        new_image(hulk_leg);
        console.log("l")
    }

    if (keyPressed == '82')
    {
        new_image(thor_right_hand.png)
        console.log("p")
    }

    if (keyPressed == '72')
    {
        new_image(hulk_left_hand.png)
        console.log("h")
    }


    function up()
    if(player_y >=0)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        console.log(player_object);
        player_update();
    }

    
    function down()
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        console.log(player_object);
        player_update();
    }
    
    function left()
    {
        if(player_x >0)
        {
            player_x = player_x = block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When Left arrow key is pressed, X = " + player_x + ", Y = "+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right()
    {
        if(player_x <=850)
        {
            player_x = player_x = block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When Right arrow key is pressed, X = " + player_x + ", Y = "+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    
