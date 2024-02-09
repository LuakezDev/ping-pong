const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d")
  gapX = 10

 const mouse = { x: 0, y: 0 }

  //Objeto Campo

   const field = {
    w : window.innerWidth,
    h : window.innerHeight,
    draw: function(){
    ctx.fillStyle = "#286047"
    ctx.fillRect(0, 0, this.w, this.h)

    }
  }
   //Objeto linha Central

const line = {
    w: 17,
    h:window.innerHeight, 
    draw: function(){
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(field.w/2-this.w/2,0,this.w,this.h)
    }
  }

  // Objeto das raquetes
const raqueteE = {
    x: gapX,
    y: 0,
    w: line.w,
    h: 200,

    _move: function () {
  this.y = mouse.y - this.h / 2
},

    draw:function(){
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(this.x, this.y, this.w, this.h)

    this._move()
    }
  }

const raqueteD = {
    x: field.w - line.w - gapX,
    y: 0,
    w: line.w,
    h: 200,

    _move: function () {
  this.y = ball.y
},

     draw:function(){
     ctx.fillStyle = "#ffffff"
     ctx.fillRect(this.x, this.y, this.w, this.h)

     this._move()
     }
  }

  //Objeto Bola

const ball = {
    x:100,
    y:75,
    r:20,
    speed:5,

    _move:function(){

        this.x +=1 * this.speed
        this.y +=1 * this.speed
    },

    draw:function(){
    ctx.fillStyle = "#ffffff"
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();

    this._move()
    }
  }

  //Objeto Placar

const place = {
    human: 1,
    computer: 2,

    draw:function(){
    ctx.font = "bold 72px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillStyle = "#01341D"
    ctx.fillText(this.human, field.w / 4, 100)
    ctx.fillText(this.computer,field.w/ 4 + field.w / 2, 100)

    }
  }


  function setup(){
    canvas.width = ctx.width = field.w
    canvas.height = ctx.height = field.h

  }

  function draw (){

    field.draw()
    line.draw()
    raqueteD.draw( )
    raqueteE.draw()
    ball.draw()
    place.draw()
  }


  
window.animateFrame = (function () {
return (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    return window.setTimeout(callback, 1000 / 60)
  }
)
})()

function main() {
animateFrame(main)
draw()
}

setup()
main()

canvas.addEventListener("mousemove", function (e) {
mouse.x = e.pageX
mouse.y = e.pageY
})

