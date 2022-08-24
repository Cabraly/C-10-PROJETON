var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e2e3a4e4-4ae8-40b1-a464-169e4224df7d","171a30ad-9ed0-4695-a47a-033981df62b1","08265f30-585e-41d7-bc6d-650d73c19df9","8fbfa5b3-8f49-470c-a235-440623257d14","303d90a6-ff84-4362-b31a-fafa828ede2e","4e823bd6-1900-41b8-aad0-cd6f0bbcdf7e","268200da-7030-498c-b560-2697c8ad5f35","579eea5b-8f36-4709-94d5-7361ff5c15dc","f4516c86-fe24-411e-b39d-637ddaafdf35","4a0e23b3-ec41-4cea-bc4a-c3d88cb2bb39","d4ee1724-311e-46a4-8b20-bd718ec3080c","164198e7-919f-44d4-8e91-ce216436b1d6","dae7e767-9d6e-4740-9e0e-bdda94d6d694","ae0997c8-f263-4cb9-8ca7-ee9e61737fa5","6b22fa52-62c7-4062-ab28-e1f024e30bba"],"propsByKey":{"e2e3a4e4-4ae8-40b1-a464-169e4224df7d":{"name":"Fundo","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"cqUd6HtG8JEQXYhCdZw4pMEkqLUrJZiw","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e2e3a4e4-4ae8-40b1-a464-169e4224df7d.png"},"171a30ad-9ed0-4695-a47a-033981df62b1":{"name":"heart","sourceUrl":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"NolfDXD9f49COunFY6Ops3IuWeUdWXbo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png"},"08265f30-585e-41d7-bc6d-650d73c19df9":{"name":"box","sourceUrl":null,"frameSize":{"x":326,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"xSrwKN12m1TNbDT2HY_hB3o7rKEwA_wY","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":300},"rootRelativePath":"assets/08265f30-585e-41d7-bc6d-650d73c19df9.png"},"8fbfa5b3-8f49-470c-a235-440623257d14":{"name":"emoji","sourceUrl":"assets/api/v1/animation-library/gamelab/5dfwGwvOHeRPpR_p8KVezuREARYyKasG/category_emoji/emoji_11.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"5dfwGwvOHeRPpR_p8KVezuREARYyKasG","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5dfwGwvOHeRPpR_p8KVezuREARYyKasG/category_emoji/emoji_11.png"},"303d90a6-ff84-4362-b31a-fafa828ede2e":{"name":"emoji2","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"6F9mcoWzUfQZ2Lq1Ybx9pW5oXKrXdMRN","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/303d90a6-ff84-4362-b31a-fafa828ede2e.png"},"4e823bd6-1900-41b8-aad0-cd6f0bbcdf7e":{"name":"medo","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"V7CLF1IzNDgZY5V81auudAsd3xS4RJfh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/4e823bd6-1900-41b8-aad0-cd6f0bbcdf7e.png"},"268200da-7030-498c-b560-2697c8ad5f35":{"name":"eita","sourceUrl":"assets/api/v1/animation-library/gamelab/LzYGTrWQ0wj6tVsE_N5ZBDb1F4PAj5vd/category_emoji/emoji_20.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"LzYGTrWQ0wj6tVsE_N5ZBDb1F4PAj5vd","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LzYGTrWQ0wj6tVsE_N5ZBDb1F4PAj5vd/category_emoji/emoji_20.png"},"579eea5b-8f36-4709-94d5-7361ff5c15dc":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/syF1rBqhPZbnoHssZUK19Zrjk7M8FQlI/category_icons/soccerball.png","frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"syF1rBqhPZbnoHssZUK19Zrjk7M8FQlI","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/syF1rBqhPZbnoHssZUK19Zrjk7M8FQlI/category_icons/soccerball.png"},"f4516c86-fe24-411e-b39d-637ddaafdf35":{"name":"Bola","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"0z8Q9wiU2RmRe2M2IKq7quiXK1KRkZuJ","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/f4516c86-fe24-411e-b39d-637ddaafdf35.png"},"4a0e23b3-ec41-4cea-bc4a-c3d88cb2bb39":{"name":"Azul","sourceUrl":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png"},"d4ee1724-311e-46a4-8b20-bd718ec3080c":{"name":"Red","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"_LnXzAn4c1CWFkBt_iB.jE1j2_PBcXgf","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d4ee1724-311e-46a4-8b20-bd718ec3080c.png"},"164198e7-919f-44d4-8e91-ce216436b1d6":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"dae7e767-9d6e-4740-9e0e-bdda94d6d694":{"name":"controle","sourceUrl":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png","frameSize":{"x":98,"y":63},"frameCount":1,"looping":true,"frameDelay":2,"version":"Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":63},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png"},"ae0997c8-f263-4cb9-8ca7-ee9e61737fa5":{"name":"game","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"6b22fa52-62c7-4062-ab28-e1f024e30bba":{"name":"win","sourceUrl":null,"frameSize":{"x":860,"y":481},"frameCount":1,"looping":true,"frameDelay":12,"version":"XR_GPxo7GJGMge6E80iUybWtOafkIgm7","loadedFromSource":true,"saved":true,"sourceSize":{"x":860,"y":481},"rootRelativePath":"assets/6b22fa52-62c7-4062-ab28-e1f024e30bba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200,200);
bg.setAnimation("fundo");

var estadoJogo= "inicio";


var Raquete = createSprite(200, 375, 70,20);
Raquete.shapeColor="white";
Raquete.setAnimation("controle");
Raquete.scale= 0.8;

var bola = createSprite(200, 250, 20, 20);
bola.setAnimation("Bola");
bola.scale= 0.1;
bola.shapeColor="black";
 
var pontos =0;

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box1.setAnimation("Red");
box1.scale= 0.1;
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.setAnimation("Azul");
box2.scale= 0.1;
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.setAnimation("Red");
box3.scale= 0.1;
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.setAnimation("Azul");
box4.scale= 0.1;
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box5.setAnimation("Red");
box5.scale= 0.1;
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.setAnimation("Azul");
box6.scale= 0.1;
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.setAnimation("Red");
box7.scale= 0.1;
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.setAnimation("Azul");
box8.scale= 0.1;


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("Azul");
box9.scale= 0.1;
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.setAnimation("Red");
box10.scale= 0.1;
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.setAnimation("Azul");
box11.scale= 0.1;
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.setAnimation("Red");
box12.scale= 0.1;
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
box13.setAnimation("Azul");
box13.scale= 0.1;
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.setAnimation("Red");
box14.scale= 0.1;
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.setAnimation("Azul");
box15.scale= 0.1;
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.setAnimation("Red");
box16.scale= 0.1;


function draw() { 
  // background("white");
  drawSprites();
  
  textSize(25);
  fill ("white");
  stroke("black");
  text("Pontuação = "+ pontos,220,25);
  
  createEdgeSprites();
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(topEdge);
 

  

  if(bola.isTouching(box1))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
    bola.bounceOff(box1);
    pontos++;
    box1.destroy();
  }
 if(bola.isTouching(box2))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
   bola.bounceOff(box2);
    pontos=pontos+1;
    box2.destroy();
  }
 if(bola.isTouching(box3))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box3);
    pontos=pontos+1;
    box3.destroy();
  }
 if(bola.isTouching(box4))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box4);
    pontos=pontos+1;
    box4.destroy();
  }
 if(bola.isTouching(box5))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box5);
    pontos=pontos+1;
    box5.destroy();
  }
 if(bola.isTouching(box6))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box6);
    pontos=pontos+1;
    box6.destroy();
  }
 if(bola.isTouching(box7))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box7);
    pontos=pontos+1;
    box7.destroy();
  }
 if(bola.isTouching(box8))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box8);
    pontos=pontos+1;
    box8.destroy();
  }
 if(bola.isTouching(box9))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box9);
    pontos=pontos+1;
    box9.destroy();
  }
 if(bola.isTouching(box10))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box10);
    pontos=pontos+1;
    box10.destroy();
  }
 if(bola.isTouching(box11))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box11);
    pontos=pontos+1;
    box11.destroy();
  }
 if(bola.isTouching(box12))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box12);
    pontos=pontos+1;
    box12.destroy();
  }
 if(bola.isTouching(box13))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box13);
    pontos=pontos+1;
    box13.destroy();
  }
 if(bola.isTouching(box14))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box14);
    pontos=pontos+1;
    box14.destroy();
  }
 if(bola.isTouching(box15))
  {
    playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
     bola.bounceOff(box15);
    pontos=pontos+1;
    box15.destroy();
  }
 if(bola.isTouching(box16))
{
  playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3");
  bola.bounceOff(box16);
    pontos=pontos+1;
    box16.destroy();
  }
if (bola.isTouching(Raquete)) {
   bola.bounceOff(Raquete);
   playSound("assets/category_hits/8bit_splat.mp3");
}
if (pontos==16) {
  textSize(30);
  fill("white");
  stroke("black");
 text("Você ganhou!",100,220);
 bola.velocityY= 0;
 bola.velocityX= 0; 
}
if (bola.isTouching(bottomEdge)) {
  var end = createSprite(200,200);
  end.setAnimation("game");
  end.scale= 0.9;
  bola.velocityY= 0;
  bola.velocityX= 0;
}
  if(estadoJogo=="inicio") {
   textSize(20);
   stroke("black");
   fill("white");
   text("Bem-vindo! Pressione enter para jogar :)",20,340);
   if(keyDown("enter")) {
   bola.velocityX= 3;
   bola.velocityY= 4;
   estadoJogo="jogando";  
  }
  }
  if(estadoJogo=="jogando") {
    Raquete.x=World.mouseX;
    if(pontos==16){
     estadoJogo="fim";
    }
    if (estadoJogo=="fim") {
      bola.velocityX= 0;
      bola.velocityY= 0;
  var win = createSprite(200,210);
  win.scale= 0.5;
  win.setAnimation("win");
    }
    
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
