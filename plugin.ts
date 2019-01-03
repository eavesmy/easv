export class Plugin {

    width: number = 0;
    height: number = 0;
    angle: number = 0;
    gain: number = 1.25;
    bgColor: string;
    id: any = Date.now();
    __position:any;

    nodes = []

    drag_left: number = 0;
    drag_top: number = 0;

    dom: any;

    roll_left(): void {
        this.angle -= 5;
        this.dom.style.transform = "rotate(" + this.angle + "deg)";
    }

    roll_right(): void {
        this.angle += 5;
        this.dom.style.transform = "rotate(" + this.angle + "deg)";
    }

    zoom(): void {
        this.dom.style.width *= this.gain;
        this.dom.style.height *= this.gain;
    }

    narrow(): void {
        this.dom.style.width /= this.gain;
        this.dom.style.height /= this.gain;
    }

    
}

//TODO: 设立层，一次编辑一层，每层一个id，可以根据 id 做跳转
//所有层根据dom树动态生成
//每层也是一个 plugin 可以有跳转、滑动、展示时间等效果
