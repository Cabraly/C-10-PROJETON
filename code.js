var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","360dddca-f632-4b32-a931-112cb58fc1ac","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":null,"frameSize":{"x":121,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"g8cghV1V_9zy5nCYNXuiUQ8ypc.KJIFs","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":121,"y":70},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":116,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"bmqAKIBuMLbIuQxfUrCrWjJfRTuAZx0I","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":116,"y":71},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":110,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"XDMAh2v_WP5CMxD2LMBBUuJFsuD8lq_R","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":58},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":93,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"cSv2ZRo3OMX5YDI.eAQ_W4l6flSpHatO","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":88},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"360dddca-f632-4b32-a931-112cb58fc1ac":{"name":"died","sourceUrl":null,"frameSize":{"x":93,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"yVOH9PJS2cG4yZJ8auReiVEmdWQVpp4L","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":93},"rootRelativePath":"assets/360dddca-f632-4b32-a931-112cb58fc1ac.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":614,"y":537},"frameCount":1,"looping":true,"frameDelay":12,"version":"4LMC5Tq2WFfVLxcMmkKSveP.lA1ezRbU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":614,"y":537},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"j1YP2tEdBb2jGtMimHAo3IK7YLFtljk9","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
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

var b = createSprite(200,140);
 b.setAnimation("b");
var hero = createSprite(200,380,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,310,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,233,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,80,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";

var goal =0;
var death = 0;

hero.setAnimation("hero1");
hero.scale= 0.40;
enemy1.setAnimation("enemy");
enemy1.scale= 0.50;
enemy2.setAnimation("enemy2");
enemy2.scale= 0.50;
enemy3.setAnimation("enemy3");
enemy3.scale= 0.70;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  drawSprites();

createEdgeSprites();

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
hero.collide(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-4;
  hero.setAnimation("hero1");
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4;
  hero.setAnimation("hero1");
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4;
  hero.setAnimation("hero1");
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4;
  hero.setAnimation("hero1");
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_hits/retro_game_simple_impact_1.mp3");
  hero.x=200;
  hero.y=380;
  hero.setAnimation("died");
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_instrumental/digital_upscale.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("black");
  text("Ganhou:"+goal,308,20);
  

textSize(20);
  fill("black");
  text("Morreu:"+death,10,20);
  

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
