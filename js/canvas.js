/**
 * Created by VULCANTSeries on 2017/9/2.
 */
function canvas(id){
    this.id = id;
    this.ctx = null;
    this.width = null;
    this.height = null;
    this.init = function(){
        var canvas = document.getElementById(this.id);
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = canvas.getContext('2d');
    };
    //画出所有蛇的位置
    this.draw = function(snake){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = snake.color_heard;
        //蛇头
        this.ctx.fillRect(snake.x, snake.y, snake.heard_w, snake.heard_h);
        this.ctx.fillStyle = '#000000';
        //蛇眼
        this.ctx.fillStyle = snake.color_eye;
        this.ctx.fillRect(snake.eye_left_x, snake.eye_left_y, snake.eye_w, snake.eye_h);
        this.ctx.fillRect(snake.eye_right_x, snake.eye_right_y, snake.eye_w, snake.eye_h);
        //蛇身
        this.ctx.fillStyle = snake.color_tail;
        this.ctx.fillRect(snake.x + 5, snake.y + 20, snake.body_w, snake.body_h);
    }
}
