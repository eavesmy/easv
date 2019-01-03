import {
    Plugin
} from '../plugin';

export class Plugin_Canvas extends Plugin{
    
    lineWidth:number;
    px:number;

    options:any = {
        width:Number,
        height:Number,
        angle:Number,
        gain:Number,
        bgColor:String,
        lineWidth:Number,
        px:Number
    }

    NodeTree = []; 

    constructor(options:any){
        super();
        this.lineWidth = options.lineWidth;

        this.dom = document.createElement("canvas");
        this.dom.width = options.width;
        this.dom.height = options.height;
        this.bgColor = options.bgColor || "#fff";
        this.dom.style.backgroundColor = options.bgColor || "#fff";
        this.dom.style.border = "1px solid #ccc";
        this.lineWidth = options.lineWidth || 0.01;
        this.px = options.px || 10;

        this.renderBgTable();
    }

    renderBgTable():void {
        var ctx = this.dom.getContext("2d");
        ctx.lineWidth = this.lineWidth;
        
        var x_dis = this.dom.width / this.px;
        var y_dis = this.dom.height / this.px; 

        for(let i = 0; i< this.dom.width; i+= x_dis){
            for(let j = 0; j< this.dom.height; j+= y_dis){
                ctx.moveTo(0,j);
                ctx.lineTo(this.dom.width,j);

                ctx.moveTo(i,0);
                ctx.lineTo(i,this.dom.height);
            }
        }

        ctx.stroke();
    }

    getPosition():any{

        var l_t_c = [this.dom.offsetLeft,this.dom.offsetTop];
        var l_b_c = [this.dom.offsetLeft,this.dom.offsetTop + this.dom.height];
        var r_t_c = [this.dom.offsetLeft + this.dom.width,this.dom.offsetTop];
        var r_b_c = [this.dom.offsetLeft + this.dom.width,this.dom.offsetTop + this.dom.height];
        
        return [l_t_c,l_b_c,r_t_c,r_b_c];
    }

    getNearPosition(t_rect){
        // position: [x,y];
        // 根据网格宽度获取最近网格的x，   
        
        var _position = this.dom.getBoundingClientRect();
        var x = t_rect.left - _position.left;
        var y = t_rect.top - _position.top;

        var tableX = Math.round(x / (this.dom.width / this.px));
        var tableY = Math.round(x / (this.dom.height / this.px));

        console.log(tableX,tableY,444);

        var _x = tableX * this.dom.width / this.px;
        var _y = tableY * this.dom.height / this.px;
        
        // 给出相对位置
        return [_x,_y];
    }

    exportHtml():string{
        // TODO : 计算画布上的dom，生成dom树,赋值每个dom的事件，属性       




        return "";
    }

    appendChild(plugin,position){
        // canvas 不能包裹dom,记录dom的位置，生成的时候放到div中处理
        // 检查node里有没有这个plugin
        plugin.relativePosition = position;
        
        var rect = this.dom.getBoundingClientRect();
        
        console.log(position,333);
        
        plugin.dom.style.left = position[0] + rect.left + "px";
        plugin.dom.style.top = position[1] + rect.top + "px";

        console.log(rect.left,rect.top);

        if(this.NodeTree.indexOf(plugin) === -1) this.NodeTree.push(plugin);

        console.log(this.NodeTree.length)
    }

    // Func :
    //  画布可以调节单元格要渲染后的像素
}
