let playerName = '';
let playerNameIn;
let resultP, scoreR;
let first = true;
let highScoresCont = [];
// var entered = false;

function resetSketch() {
  if (!first){
    for (let h of highScoresCont) {
      h.eliminate();
    }
    resultP.remove();
    button.remove()
  }
  
  button.remove();
  first = false;
  
  
  background(200);
  circles();
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(30);
  textSize(100);
  text('420 ROW', 150, 200);
  text('the game', 150, 300);
  setTimeout(function() {
    loopStart = true;
    trains = [];
    loop();
    score = 0;
    joints = 0;
    dayCount = 1;
	sunCount = true;
	xSun = width;
    talpaG = 600;
    more420 = false;
	fogliaN = 0;
    isPlayed = false;
    currentBackground = 0;
    fill(0);
    intro.stop();
    song.play();
    song.setVolume(0.5);
  }, 1000);
}

function startGame() {
  loopStart = false;
  button = createButton(buttonText);
  var col = 'rgba(0,0,0,0.9)';
  button.style('background-color', col);
  button.style('font-size', '2em');
  button.style('color', '#fff');
  button.style('position','absolute');
  button.size(300, 100);
  button.mousePressed(resetSketch);
  intro.play();
}

function highScoresDisplay() {
  playerNameIn =  createInput('');
  playerNameIn.size(500,40)
  playerNameIn.style('position','absolute');
  playerNameIn.input(function(){
    playerName = this.value();
  });
  
  // if (playerName) {
  //   entered = true;
  // }
  
  var postScore = createButton('POST YOUR SCORE');
  postScore.style('position','absolute');
  postScore.style('top','300px');
  postScore.size(100,50)
  // if (entered) {
    postScore.mouseClicked(function(){
      postScore.remove();
      playerNameIn.remove();
      error.remove()
      httpPost('https://420row.duckdns.org/scores420','json',{'name':playerName,'score':score},function(data){
        let result = 'you finished ' + data.placement;
        resultP = createP(result);
        resultP.style('position','absolute');
        resultP.style('top','50px');
        resultP.style('color','#fff');
        resultP.style('font-size','1.5em');
        httpGet('https://420row.duckdns.org/scores420','json',function(data){
          for (let [i,s] of data.scores_list.entries()) {
            highScoresCont.push(new Score(i,s.name,s.score));
          }
          startGame();
        })
      }); 
    });
  // } else {
    let error = createP('enter your name');
    error.style('color','red');
    error.style('position','absolute');
    setTimeout(function(){error.remove()},1000);
  // }
}

function death() {
  buttonText = "play again";
  song.stop();
  noLoop();
  police();
  setTimeout(function () {
    polizei.stop();
    background(0, 255, 0);
    circles();
    
    let vote;
    if (score <= 150) {vote = 'F';}
    else if (score > 150 && score <= 600 ) {vote = 'E';}
    else if (score > 600 && score <= 1000 ) {vote = 'D';}
    else if (score > 1000 && score <= 1750 ) {vote = 'C';}
    else if (score > 1750 && score <= 2500 ) {vote = 'B';}
    else if (score > 2500 && score <= 3000 ) {vote = 'A';}
    else if (score > 3000 && score <= 3500 ) {vote = 'S';}
    else {vote = 'inSSSane';}
    
    textSize(60);
    stroke(100);
    strokeWeight(10);
    fill(255);
    text('Score: ' + score, 250, 150);
    textSize(30);
    stroke(0);
    text('Vote: ', 520, 90);
    textSize(50);
    stroke(255);
    strokeWeight(5);
    fill(255,0,0);
    setTimeout(function(){
      text(vote, 600, 90);
      boing.play();
    },1000);
    highScoresDisplay();
  }, 2500);
}

function scoreDispl() {
  if (frameCount % 10 == 0) {
    score = ++score;
  }
  punteggio = text('Score: ' + score, 40, 35);
  punteggio.noStroke();
  punteggio.textSize(20);
  jointsNum = text('Jeffreys: ' + joints, 650, 35);
  if (smoked) {
    var puntelloAnim = text('+' + addPunt,160,35);
  }
}

function police() {
  polizei.play();
  polizei.setVolume(3);
  var txtPos = 250;
  fill(255, 255, 255);
  textSize(100);
  var uz = 1.2;
  setTimeout(function() {
    background(0, 0, 255);
    inPolice()
    text('you', txtPos - 80, txtPos/uz);
  }, 300);
  setTimeout(function() {
    background(255, 0, 0);
    inPolice()
    text('have', txtPos, txtPos/uz);
  }, 600);
  setTimeout(function() {
    background(0, 0, 255);
    inPolice()
    text('been', txtPos + 80, txtPos/uz);
  }, 900);
  setTimeout(function() {
    background(255, 0, 0);
    inPolice()
    text('caught', txtPos + 120, txtPos/uz);
  }, 1200);
}

function inPolice() {
  noStroke();
  circles();
  fill(255);
}