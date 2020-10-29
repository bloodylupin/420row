class Score {
  constructor(i,name,score) {
    this.score = score;
    this.name = name;
    this.highScores = i + 1 + ' --> ' + this.name + ' : ' + this.score;
    this.highScoresY = '' + ((i * 30) + 280) + 'px';
    this.highScoresCont = createP(this.highScores);
    this.highScoresCont.style('font-size','1.5em');
    this.highScoresCont.style('color','#fff');
    this.highScoresCont.style('position','absolute');
    this.highScoresCont.style('top',this.highScoresY);
  }
  eliminate(){
    this.highScoresCont.remove();
  }
}