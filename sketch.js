var kPressed = false, jPressed = false, vPressed = false


function preload(){
  clickImg = loadImage("clickHere.png")
  jimg = loadImage("jss.png")
  vimg = loadImage("vss.png")
  kimg = loadImage("kss.png")
 

}

function setup() {
  createCanvas(windowWidth,windowHeight);



 kGame = createSprite(width/2-300,height/2-100,200,200)
 kGame.addImage(kimg)
 kGame.scale = 0.5
 kGame.visible = false
 button1 =  createSprite(width/2-300,height/2+50, 50, 50);
 button1.addImage(clickImg)
 button1.scale = 0.5
 

 vGame = createSprite(width/2,height/2-100,200,200)
 vGame.addImage(vimg)
 vGame.scale = 0.5
 vGame.visible = false
 button2 =  createSprite(width/2,height/2+50, 50, 50);
 button2.addImage(clickImg)
 button2.scale = 0.5

 jGame = createSprite(width/2+300,height/2-100,200,200)
 jGame.addImage(jimg)
 jGame.scale = 0.5 
 jGame.visible = false
 button3 =  createSprite(width/2+300,height/2+50, 50, 50);
 button3.addImage(clickImg)
 button3.scale = 0.5
}

function draw() {
  background("white"); 
  

  fill("red")
  textSize(20)
  text("Designed by Karthik", width/2-390,height/2-250)
  text("Designed by Vyshnavi", width/2-100,height/2-250)
  text("Designed by Jeeva Jenireeth ", width/2+180,height/2-250)

  if(kPressed==true && vPressed==true && jPressed==true){
  fill("green")
  textSize(30)
  text("Tap on the games to start playing..", width/2-200,height/2+150)
  }


  if(mousePressedOver(button1)){
    kGame.visible = true
    kPressed = true
  }

  if(mousePressedOver(button2)){
    vGame.visible = true
    vPressed = true
  }

  if(mousePressedOver(button3)){
    jGame.visible = true
    jPressed = true
  }

  if(mousePressedOver(kGame) && kPressed == true){
    window.open("https://studio.code.org/projects/gamelab/KaD8G6QBp0aJXsOQJEKZ-yQgeCxf75ZguxnzJAM7m5Q", "_blank")
  }

  if(mousePressedOver(vGame) && vPressed == true){
    window.open("https://studio.code.org/projects/gamelab/B1Htn2EwkkWqZ-B9kzIkP9RhAg7yZHIl7CIGvod-_TI", "_blank")
  }

  if(mousePressedOver(jGame) && jPressed == true){
    window.open("https://studio.code.org/projects/gamelab/rnMLw3sthMIzzjaCEEF2o2xZ_ejPLkDq8UVaQEc5BYU", "_blank")
  }


  drawSprites();
}