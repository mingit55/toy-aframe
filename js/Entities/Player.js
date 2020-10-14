export default class Player {
    constructor(){
        this.camera = document.querySelector("#camera").object3D;
    }

    get x(){
        return this.camera.position.x;
    }
    get y(){
        return this.camera.position.y;
    }
    get z(){
        return this.camera.position.z;
    }

    set x(value){
        this.camera.position.x = value;
    }
    set y(value){
        this.camera.position.y = value;
    }
    set z(value){
        this.camera.position.z = value;
    }


    jump(){
               
    }
    
}