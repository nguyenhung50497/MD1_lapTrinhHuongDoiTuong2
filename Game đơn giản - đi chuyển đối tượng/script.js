class Hero {
  constructor(image, top, speed, left, up, right, down, size) {
    this.image = image;
    this.top = top;
    this.speed = speed;
    this.left = left;
    this.up = up;
    this.right = right;
    this.down = down;
    this.size = size;
  }
  getHeroElementRight() {
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.up+'px; left:'+this.left+'px;position:absolute;" />';
  }

  getHeroElementDown() {
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.up+'px; left:'+this.left+'px;position:absolute;" />';
  }

  getHeroElementLeft() {
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.up+'px; left:'+this.right+'px;position:absolute;" />';
  }

  getHeroElementUp() {
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.down+'px; left:'+this.right+'px;position:absolute;" />';
  }

  moveRight() {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }

  moveDown() {
    this.up += this.speed;
    console.log('ok: ' + this.up);
  }

  moveLeft() {
    this.right -= this.speed;
    console.log('ok: ' + this.right);
  }

  moveUp() {
    this.down -= this.speed;
    console.log('ok: ' + this.down);
  }
}

let hero = new Hero('coin.png',20,100,30,30,1700,700,200);

function start(){
  if(hero.left < 1900 - hero.size) {
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElementRight();
    setTimeout(start, 500);
  }
  else if (hero.up < 900 - hero.size) {
    hero.moveDown();
    document.getElementById('game').innerHTML = hero.getHeroElementDown();
    setTimeout(start, 500);
  }
  else if (hero.right > 0) {
    hero.moveLeft();
    document.getElementById('game').innerHTML = hero.getHeroElementLeft();
    setTimeout(start, 500);
  }
  else if (hero.down > 0) {
    hero.moveUp();
    document.getElementById('game').innerHTML = hero.getHeroElementUp();
    setTimeout(start, 500);
  }
}

start();
