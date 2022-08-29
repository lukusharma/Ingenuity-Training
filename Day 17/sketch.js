// global Scope
var bg, bgImage;
var mario, marioImage;

// Load Assets
function preload() // used to load resources to the memory
{
    bgImage = loadImage("image_of_bg");
    // continuous images therefore animation is loaded
    mario_running = loadAnimation(
        "mar1",
        "mar2",
        "mar3",
        "mar4",
        "mar5",
        "mar6",
    );

}

// creating basic skeleton with their required credentials
function setup() 
{
    // background
    createCanvas(1000, 600); // function to create canvas                              
    bg = createSprite(600, 300) // used to make ibjects (location,width,height)(x,y,w,h), usually not required to give w and h
    bg.addImage(bgImage); // add image to the object 'bg'
    bg.scale = 0.5; // reduce the size of the image
    
    // mario animation
    mario = createSprite(200, 520);
    mario.addAnimation("running_animation",mario_running); // quotes to give name to animation
    mario.scale = 0.2;

    // moving the background
    bg.x = bg.x - 200;
    


}

// Used to redraw the objects of the canvas
function draw()
{
    background("black");
    drawSprites(); // to draw all the sprites/objects

}