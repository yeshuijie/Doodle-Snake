/**
 * Created by VULCANTSeries on 2017/9/2.
 */
/**
 * 
 * @param x X坐标
 * @param y Y坐标
 * @param color_heard 蛇头颜色
 * @param color_tail 蛇身颜色
 * @param color_eye 蛇眼颜色
 * @param dir 方向 1:左 2:上 3:右 4:下
 * @param heard_w 头宽
 * @param heard_h 头长
 * @param eye_w 眼宽
 * @param eye_h 眼长
 * @param body_w 身宽
 * @param body_h 身长
 */
function snake(x,y,color_heard,color_eye,color_tail,dir,heard_w,heard_h,eye_w,eye_h,body_w,body_h){
    this.dir = dir;
    this.heard_w = heard_w;
    this.heard_h = heard_h;
    this.eye_w = eye_w;
    this.eye_h = eye_h;
    this.eye_left_x = 0;
    this.eye_left_y = 0;
    this.eye_right_x = 0;
    this.eye_right_y = 0;
    this.body_w = body_w;
    this.body_h = body_h;
    this.x = x;
    this.y = y;
    this.color_heard = color_heard;
    this.color_tail = color_tail;
    this.color_eye = color_eye;
    //改变方向
    this.changeDir = function(keyCode){
        if(keyCode == 37){
            if(this.dir == 3){
                return false;
            }
            this.dir = 1;
        }
        else if(keyCode == 38){
            if(this.dir == 4){
                return false;
            }
            this.dir = 2;
        }
        else if(keyCode == 39){
            if(this.dir == 1){
                return false;
            }
            this.dir = 3;
        }
        else if(keyCode == 40){
            if(this.dir == 2){
                return false;
            }
            this.dir = 4;
        }
    };
    //移动
    this.move = function () {
        if(this.dir == 1){
            this.eye_left_x = this.x + 4;
            this.eye_left_y = this.y + 3;
            this.eye_right_x = this.x + 4;
            this.eye_right_y = this.y + 13;
            this.x--;
        }
        else if(this.dir == 2){
            this.eye_left_x = this.x + 4;
            this.eye_left_y = this.y + 3;
            this.eye_right_x = this.x + 13;
            this.eye_right_y = this.y + 3;
            this.y--;
        }
        else if(this.dir == 3){
            this.eye_left_x = this.x + 13;
            this.eye_left_y = this.y + 3;
            this.eye_right_x = this.x + 13;
            this.eye_right_y = this.y + 13;
            this.x++;
        }

        else if(this.dir == 4){
            this.eye_left_x = this.x + 4;
            this.eye_left_y = this.y + 13;
            this.eye_right_x = this.x + 13;
            this.eye_right_y = this.y + 13;
            this.y++;
        }
    };
}