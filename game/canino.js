class Canino {
  constructor(dim,yOff,punti,speed) {
    this.r = dim;
    this.x = width;
    this.y = height - this.r + yOff;
    this.punti = punti;
    this.speed = speed;
  }
  show(){
    image(uImg,this.x, this.y ,this.r,this.r);
  }
  move(){
    this.x -= this.speed;
  }
}