class Unicorn {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;   
    this.animation = animation;
    this.len = this.animation.lenght;
    this.speed = speed;
    this.inde = 0;
    this.vy = 0;
    this.gravity = 1;
    this.frameC = 0;
    this.jumping = false;
  }
  
  jump() {
    if (this.y == height - this.r){
      this.vy = -21; 
    }
  }
  
  hits(train) {
    let x1 = this.x;
    let y1 = this.y;
    let x2 = train.x;
    let y2 = train.y;
    var thisR = this.r*0.6;
    var trainR = train.r*0.6;
    
    return collideRectRect(x1,y1,thisR,thisR,x2,y2,trainR,trainR);
  }
  
  hits(canino) {
    let x1 = this.x;
    let y1 = this.y;
    let x2 = canino.x;
    let y2 = canino.y;
    var thisR = this.r*0.6;
    var caninoR = canino.r*0.6;
    
    return collideRectRect(x1,y1,thisR,thisR,x2,y2,caninoR,caninoR);
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);          
  }
  
  show() {
    let anim = animation.length - 1;
    if(frameCount%5==0){
      this.frameC++;
    }
     if (this.y < height - this.r){
      this.jumping = true;
    } else {
      this.jumping = false;
    }
    if (!this.jumping) {
      image(animation[this.frameC % anim], this.x, this.y - 5 ,this.r,this.r);
    } else {
      image(animation[(this.frameC % 2) + 5], this.x, this.y - 5 ,this.r,this.r);   
    }
  }
}