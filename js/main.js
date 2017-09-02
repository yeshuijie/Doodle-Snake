/**
 * Created by VULCANTSeries on 2017/9/2.
 */
function director(){
    this.scene = 2;
    this.main = function(){
      if(this.scene == 1){
          this.start();
      }
        else if(this.scene == 2){
          this.game();
      }
        else if(this.scene == 3){
          this.over()
      }
    };
    this.start = function(){

    };
    this.game = function(){
        var scene = new canvas("myCanvas");
        scene.init();
        var snake1 = new snake(40,650,'#ccddcc','#000000','#dd5200',2, 20, 20,3, 3, 10, 20);
        //监听键盘
        $(document).keydown(function(event){
            var keyCode = event.keyCode;
           snake1.changeDir(keyCode);
        });
        setInterval(function(){
            snake1.move();
            scene.draw(snake1);
        }, 10);
    };
    this.over = function(){

    }
}