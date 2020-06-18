
enum Direction {
    //% block="foward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
}


//%  block="Wonder Women" weight=100 color=#f6576d icon="\u2605"
namespace ww {
    /**
     * Move Agent n spaces in the e direction
     */
    //% block="Move Wonder Woman %n blocks %e"
    export function foo(n: number, e: Direction): void {
        for (let i = 0; i < n; i++){
            if(blocks.testForBlock(STONE, world(-160,4,60)) == false){
                if(e==0){
                    agent.move(FORWARD, 1);
                } else if(e==1){
                    agent.move(BACK, 1);
                } else if(e==2){
                    agent.move(LEFT, 1);
                } else if(e==3){
                    agent.move(RIGHT, 1);
                }
            }else{
                break;
            }
        }
    }
    /**
     * Some test information
     */
    //% block="Test %n %e"
    export function food(n: number, e: Direction): void {
        for (let i = 0; i < n; i++){
            if(blocks.testForBlock(STONE, world(-160,4,60)) == false){
                if(e==0){
                    agent.move(FORWARD, 1);
                } else if(e==1){
                    agent.move(BACK, 1);
                } else if(e==2){
                    agent.move(LEFT, 1);
                } else if(e==3){
                    agent.move(RIGHT, 1);
                }
            }else{
                break;
            }
        }
    }    
}
