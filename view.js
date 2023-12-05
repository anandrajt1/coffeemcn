//view-to show data insdide html

class View{
    constructor(){
        this.light=document.getElementById('light')
        this.milkQty=document.getElementById('milkQty')
        this.powderQty=document.getElementById('powderQty')
        this.sugarQty=document.getElementById('sugarQty')
    }

    turnOnLight(){
        this.light.classList.remove('off')
        this.light.classList.add('on')
    }

    turnOffLight(){
        this.light.classList.remove('on')
        this.light.classList.add('off')
    }

    showMilkQty(qty){
        this.milkQty.innerHTML=qty
    }

    showPowderQty(qty){
        this.powderQty.innerHTML=qty
    }

    showSugarQty(qty){
        this.sugarQty.innerHTML=qty
    }
}

const view=new View()
export default view