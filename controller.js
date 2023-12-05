//controller-to handle btn clicks
import model from "./model.js"
import view from "./view.js"

class Controller{
    //initailze all the btn cntrols inside constructor
    constructor(){
        this.powerBtn=document.getElementById("powerBtn")
              

        this.milkForm=document.getElementById('milkForm')
             


        this.powderForm=document.getElementById('powderForm')
        this.sugarForm=document.getElementById('sugarForm')


         
    }


    //make a new fn to decide what should happen when these btns are clicked(any name)
    start(){
        this.powerBtn.addEventListener("click",this.switchPower)
        this.milkForm.addEventListener("submit",this.addMilk)
        this.powderForm.addEventListener("submit",this.addPowder)
        this.sugarForm.addEventListener("submit",this.addSugar)
    }
    switchPower=()=>{
        model.switchPower()
        const power=model.getPowerstatus()
        
        if(power){
            view.turnOnLight()
        }else{
            view.turnOffLight()
        }
    }

    addMilk=(e)=>{
        e.preventDefault()
        const quantity=Number(this.milkForm['milkInput'].value)
        model.addMilk(quantity)
        const milkQuantity=model.getMilkQuantity()
        view.showMilkQty(milkQuantity)
    }

    addPowder=(e)=>{
        e.preventDefault()
        const quantity=Number(this.powderForm['powderInput'].value)
        model.addPowder(quantity)
        const powderQuantity=model.getPowderQuantity()
        view.showPowderQty(powderQuantity)


    }

    addSugar=(e)=>{
        e.preventDefault()
        const quantity=Number(this.sugarForm['sugarInput'].value)
        model.addSugar(quantity)
        const sugarQuantity=model.getSugarQuantity()
        view.showSugarQty(sugarQuantity)
    }
}

const controller=new Controller() //making an obj

controller.start() //to start the prgm