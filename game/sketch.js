let unicorn;
let uImg;
let tImg;
let terreno1;
let terreno2;
let terreno3;
let sfondo1;
let sfondo2;
let sfondo3;
let bgImg4;
let nuvole;
let spriteSheet;
let spriteData;
let trains = [];
let canini = [];
var y1 = 0;
var y2;
var b1 = 0;
var b2;
var a1 = 0;
var a2;
var button;
var div;
var loopStart;
var buttonText;
var score = 0;
var joints = 0;
var dayCount = 1;
var addPunt;
let xSun;
let dSun = 90;
var titleX = 300;
var xPav = 0;

var scrollSpeed = 6;
var song;
var boing;
var polizei;
var intro;
var bong;
var win;
let talpe = [];
let talpaG = 600;
let happySound = [];
var isPlayed = false;
var isPlayed2 = false;

var speed = 1;
var completed = false;

let sunCount = true;
var more420;
let smoked;

var fade = 0;
var fadeAmount = 1;

let animation = [];


let sfondi = [];

let winHeads = [];
let winHeadsX = 800;
let foglia;
let fogliaY = 0;
let fogliaN = 0;

function preload() {
  uImg = loadImage('canino.png');
  tImg = loadImage('Pu-Lotto.png');;
  terreno1 = loadImage('terreno1.png');
  terreno2 = loadImage('terreno2.png');
  terreno3 = loadImage('terreno3.png');
  sfondi = [loadImage('background/sfondo1.png'),
           loadImage('background/sfondo2.png'),
           loadImage('background/sfondo3.png'),
           loadImage('background/sfondo4.png'),
           loadImage('background/sfondo5.png')];
  bgImg4 = loadImage('pavimento.png');
  nuvole = loadImage('nuvole.png');
  foglia = loadImage('foglia.png');
  talpe = [loadImage('talpe/talpa1.png'),
          loadImage('talpe/talpa2.png'),
          loadImage('talpe/talpa3.png'),
          loadImage('talpe/talpa4.png'),
          loadImage('talpe/talpa5.png')];
  winHeads = [loadImage('winHeads/peru-head.png')];
  spriteSheet = loadImage('crow-man.png');
  spriteData = loadJSON('crow-man.json');
  song = loadSound('Calimba-EsJammyJams.mp3');
  boing = loadSound('Goofy_Spring_Bounces.mp3');
  polizei = loadSound('Police_Siren.mp3');
  intro = loadSound('Drumset_Falling_Down_Stairs.mp3');
  bong = loadSound('Bong-Rip.mp3');
  happySound = [loadSound('happySound/happy1.mp3'),
               loadSound('happySound/happy2.mp3'),
               loadSound('happySound/happy3.mp3'),
               loadSound('happySound/happy4.mp3'),
               loadSound('happySound/happy5.mp3')];
  win = loadSound('win.mp3');
}

function setup() {
  createCanvas(800, 450);
  noLoop();
  y2 = width;
  b2 = width;
  a2 = width;
  unicorn = new Unicorn(animation, 1);
  buttonText = "start game";
  startGame();
  textFont('montserrat');
  boing.setVolume(10);
  intro.play();
  intro.setVolume(0.5);
  bong.setVolume(20);
  xSun = width;
  let frames = spriteData.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}

function keyPressed() {
  if (key == ' ') {
    if(loopStart){
      unicorn.jump();
      boing.play();
    }
  }
}

function mousePressed() {
  if(loopStart){
    unicorn.jump();
    boing.play();
  }
}

function touchStarted() {
  if(loopStart){
    unicorn.jump();
    boing.play();
  }
}

function draw() {
      // trains = [];
  
  if (sunCount){
    talpaG = 800;
    if (dayCount < 6) {
      disegnaSfondo(dayCount, dSun);
    } else if (dayCount == 6) {
      if (!isPlayed2) {
        win.play();
        isPlayed2 = true;
      }  
      background(255);
      for (let x = 0; x < fogliaN; x++) {
        for (let y = 0; y < fogliaN; y++){
          image(foglia,x * 100,y * 100,100,50);
          image(foglia,x * 50,y * 50,50,50);
          image(foglia,x * 25,y * 25,25,25);
        }
      }
      if (frameCount % 10 == 0) {
        fogliaN++;
      }
      // image(winHeads[0], winHeadsX, 100, 300, 300);
      // winHeadsX = winHeadsX - 5;
      fill(0);
      textSize(50);
      text('you won bro',200, 200);
      text('time to 420',200, 300);
      trains = [];
    }
  } else {
      winHeadsX = 800;
      if (dayCount == 6.5){
        circles();
        fill(255);
        textSize(40);
        text('nooooo',random(80,100),random(80,100));
        text('you got too high',random(80,100),random(120,150));
        setTimeout(function(){
          if (frameCount % 10 == 0) {
            trains.push(new Train(0,120));
          }
        },3000);
      } else {
        scrollSpeed = 20;
        trains = [];
        background(0, 0, 0);
        circles();
        fill(255, 255, 0);
        sopr = circle(xSun + dSun + 20, 120, dSun);
        fill(0, 0, 0);
        circle(xSun + dSun, 100, dSun);
        image(nuvole, a1, 0, width, height);
        image(nuvole, a2, 0, width, height);
        image(nuvole, a1 * 3.5, 0, width, height);
        image(nuvole, a2 * 3.5, 0, width, height);
        image(terreno2, b1, 0, width + 7, height);
        image(terreno2, b2, 0, width + 7, height); 
        image(terreno3, y1, 0, width + 7, height);
        image(terreno3, y2, 0, width + 7, height); 
        textSize(50);
        fill(255, 0, 0, fade);
        text("BONUS", random(35,45),random(95,105));
        if (fade<0) fadeAmount=1; 

        if (fade>255) fadeAmount=-10; 

        fade += fadeAmount; 
        happySound[1].setVolume(1.5);
        happySound[1].setVolume(1.5);
        happySound[3].setVolume(0.3);
        if (!more420){
          image(talpe[dayCount - 1.5], talpaG, 100, 300, 300);
          talpaG = talpaG - 5;
          if (!isPlayed) {
            happySound[dayCount - 1.5].play();
            isPlayed = true;
        }
        setTimeout(function(){
          more420 = true;},3500);   
        setTimeout(function(){
          more420 = false;
        },5500); 
        setTimeout(function(){
          isPlayed = false;
        },6500);
      }   
    }
  }      
  
  image(bgImg4, xPav, 400, width, 50);
  image(bgImg4, xPav + width, 400, width, 50);
  xPav -= scrollSpeed / 1.5;
  if (xPav < - width) {
    xPav = 0;
  }
  textSize(50);
  fill(150);
  text('420 Row | The Game', titleX, 120);
  fill(255);
  text('Take the Jeffreys', (titleX + 100) * 2, 160);
  text('Avoid Police', (titleX + 150) * 2.5, 200);
  text('No Cops at Night', (titleX + 200) * 3, 240);
  titleX-=2;
  textSize(20);
  
  xSun -= scrollSpeed / 6;
  if (xSun < (-dSun - 50)) {
    xSun = width + dSun;
    sunCount = !sunCount;
    dayCount+=0.5;
    dayChanged = false;
    currentBackgrounded = false;
  } else if (xSun < (-dSun - 45)) {
    circles();
    trains = [];
  }

  y1 -= scrollSpeed;
  y2 -= scrollSpeed;
  a1 -= scrollSpeed / 3;
  a2 -= scrollSpeed / 3;
  b1 -= scrollSpeed / 5;
  b2 -= scrollSpeed / 5;

  if (y1 < -width) {
    y1 = width;
  }
  if (y2 < -width) {
    y2 = width;
  }
  if (b1 < -width) {
    b1 = width;
  }
  if (b2 < -width) {
    b2 = width;
  }
    if (a1 < -width) {
    a1 = width;
  }
  if (a2 < -width) {
    a2 = width;
  }
  fill(255);
  scoreDispl();

  if (frameCount % 30 == 0) {
    if (random(1) < 0.5) {
      canini.push(new Canino(100,0,10,3));
    }
  }
  
  if (frameCount % 100 == 0) {
    if (random(1) < 0.3) {
      canini.push(new Canino(50,-150,50,5));
    }
  }
  
  if (frameCount % 500 == 0) {
    if (random(1) < 0.3) {
      canini.push(new Canino(40,-200,100,7));
    }
  }

  for (let [i, c] of canini.entries()) {
    c.move();
    c.show();
    
     if (unicorn.hits(c)) {
      canini.splice(i,1);
      score = score + c.punti;
      addPunt = c.punti;
      joints++;
      bong.play();
      smoked = true;
      setTimeout(function(){smoked = false},200);
    }
  } 
  
  if(!completed){
    if (score > 100) {
      if (frameCount % 50 == 0) {
        if (random(1) < 0.5) {
          trains.push(new Train(0,120));
        }
      }
    } if (score > 500) {
        if (frameCount % 150 == 0) {
          if (random(1) < 0.5) {
            trains.push(new Train(100,80));
          }
        }
      }
    } else {
      
    }
    for (let t of trains) {
      t.move();
      t.show();
      t.grow();

      if (unicorn.hits(t)) {
        death();
      }
    } 

  unicorn.show();
  unicorn.move();

  if (!loopStart) {
    background(bgImg4);
    circles();
  }
}
