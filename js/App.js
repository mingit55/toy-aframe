import Player from "./Entities/Player.js";

export default class App {
    constructor(config){
        console.log(config.keyCode.SPACEBAR);
        this.config = config;
        this.player = new Player();

        this.setEvent();
    }

    /**
     * 이벤트 설정
     */
    setEvent(){
        // 이동 이벤트
        window.addEventListener("keydown", e => {
            console.log(e.keyCode, this.config.keyCode.SPACEBAR);
            switch(e.keyCode){
                case this.config.keyCode.SPACEBAR:
                    this.player.jump();
                    break;
                case this.config.keyCode.LEFT:
                    
                    break;
                case this.config.keyCode.TOP:
                    
                    break;
                case this.config.keyCode.RIGHT:
                    
                    break;
                case this.config.keyCode.BOTTOM:
                    
                    break;
            }
        });
    }
}