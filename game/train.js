var grandezza = 0;

class Train {
  constructor(volante,r) {
    this.r = r;
    this.x = width;  
    this.y = height - this.r - volante;
  }
  
  move(){
    this.x -= 16;
  }
  
  show(){
    image(tImg, this.x, this.y, this.r, this.r); 
    if(frameCount%5 == 0){
    this.r = this.r + grandezza ;    
    }
  }
  
  grow(){
   if(frameCount%20 == 0){ 
     if (grandezza < 3){
        grandezza++;
      }
      else{
        grandezza = grandezza * -1;
      }
    }
  }
}  