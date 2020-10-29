let dayChanged = false;
let oldDay = 1;
let currentBackground = 0;
let currentBackgrounded = false;

function disegnaSfondo(dayCount,dSun) {
  if (dayCount > oldDay) {
    dayChanged = true;
    if (!currentBackgrounded){
      currentBackground++;
      currentBackgrounded = true;
    }
  }
  scrollSpeed = dayCount * 3;
  background('#007FFF');
  image(sfondi[currentBackground], a1, 0, width + 10, height);
  if (dayChanged && dayCount > 1) {
    image(sfondi[currentBackground], a2, 0, width + 10, height);  
  } else {
    image(sfondi[currentBackground], a2, 0, width + 10, height);  
  }
  
  image(terreno2, b1, 0, width + 7, height);
  image(terreno2, b2, 0, width + 7, height);
  fill(255, 255, 0);
  circle(xSun + dSun, 100, dSun);
  image(terreno1, y1, 0, width + 7, height);
  image(terreno1, y2, 0, width + 7, height);
  
}

function circles() {
  for (i = 0; i < 250; i++) {
    fill(random(50), random(50), random(50));
    ellipse(random(800), random(450), random(77), random(77));
  }
}