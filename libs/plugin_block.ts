import {
    Plugin
} from '../Plugin';

export class Block extends Plugin{ // 继承 plugin，给 plugin 拖拽、对齐的方法
 // Block 里给生成 module 的方法
    
    width:number = 400;
    height:number = 300;
    plugin:any;
    plugin_loadded:any = [];

    constructor(options:any){
        super()

        this.dom = document.createElement("div");
        this.dom.width = this.width + "px";
        this.dom.height = this.height + "px";
        this.dom.style.backgroundColor = "#bbb";
        this.dom.innerText = options.plugin.name;
        this.dom.class = "easv-plugin-block";
        this.dom.id = this.id;

        this.plugin = options.plugin;
    }

    genPlugin(options){

        var plugin = new this.plugin(options);

        this.plugin_loadded.push(plugin);
        // 给plugin当前block的定位
        plugin.dom.style.position = "absolute";
        document.querySelector("body").appendChild(plugin.dom);

        return plugin
    }

    removePlugin(){
        // 判定落在画布外销毁
    }

    judgeLocal(e){
        console.log("plugin down");
    }
}
