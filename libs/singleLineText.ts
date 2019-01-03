import {
    Plugin
} from '../plugin';

export class Plugin_SingleLineText extends Plugin{
    
    name_en:string = "singleLineText";
    name_ch:string = "单行文本";

    // 赋值宽高,给默认值

    constructor(options:any){
        super();

        this.dom = document.createElement("p");
        this.dom.id = this.id;
        this.dom.class = "easv-plugin";
        this.dom.style.backgroundColor = "#000"
        this.dom.style.width = options.maxWidth || "100%";

        this.setText("测试测试测试");
    }
    
    setText(text:string){
        this.dom.innerHTML = text;
    }
}
