import Ember from 'ember';

const{
    $
} = Ember;

export default Ember.Component.extend({
    width: 0,
    height: 0,
    canvas: null,
    ctx: null,

    angle: 0,
    willDestroy: function(){
        $(window).unbind('resize', this.get('resizeHandler'));
    },
    didInsertElement: function(){
        this.setupCanvas();
    },
    setupCanvas: function(){
        let canvas = document.getElementById("snow-sky");
        let ctx = canvas.getContext("2d");

        var W = window.innerWidth;
        var H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        //Generate snowflakes and apply attributes
        var mf = 100;
        var flakes = [];

        for(var i = 0; i < mf; i++){
            flakes.push(
                {
                    x: Math.random() * W,
                    y: Math.random() * H,
                    r: Math.random() * 5 + 2, //min of 2px and max of 7px size snowflakes
                    d: Math.random() + 1 //density of the snowflakes.  How quick they fall.
                }
            )
        }
        function drawFlakes(){

            ctx.clearRect(0,0,W, H);
            ctx.fillStyle = "white";
            ctx.beginPath();

            for(var i = 0; i < mf; i++){
                if(i == 10){
                    ctx.fillStyle = "red";
                }else{
                    ctx.fillStyle = "white";
                }
                var f = flakes[i];
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r,0, Math.PI*2, true);
            }
            ctx.fill();
            moveFlakes();
        }
        var angle = 0.0;
        function moveFlakes(){
            angle += 0.01;
            for(var i = 0; i < mf; i++){
                //Store current flakes
                var f = flakes[i];
                //update x and y coordinates of each snowflakes
                f.y += Math.pow(f.d, 2) + 1;
                f.x += Math.sin(angle) * 2;

                //if the snowflake reaches the bottom, send a new one to the top
                if(f.y > H){
                    flakes[i] = {
                        x: Math.random() * W,
                        y: 0,
                        r: f.r,
                        d: f.d
                    }
                }
            }
        }

        setInterval(drawFlakes, 25);
    }

});
