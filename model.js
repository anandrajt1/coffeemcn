// model-for data storage

class Model{
    constructor() {
        this.power = false; // Initially power is off
        this.milk=0;
        this.powder=0;
        this.sugar=0;
    }
    

//fn to turn on and turn of the mchine
    switchPower(){
        this.power = !this.power;
       

    }

    getPowerstatus(){
        return this.power
    }
    

    addMilk(qty){
        this.milk=this.milk+qty
    }
    getMilkQuantity(){
        return this.milk
    }

    addPowder(qty){
        this.powder=this.powder+qty
    }
    getPowderQuantity(){
        return this.powder
    }

    addSugar(qty){
        this.sugar=this.sugar+qty
    }
    getSugarQuantity(){
        return this.sugar
    }
    
}

const model=new Model()
export default model