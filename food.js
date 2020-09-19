class Food{
    constructor(){
        //this.reset = createButton('reset');    
    }
    display(){
        //this.reset.position(950,230,100,20)  
    }
    getfood() {
     var foodRef = database.ref("food");
     foodRef.on("value",(data)=>{ milk=data.val(); }) } 
    update(food) { 
     database.ref('/').update({food:food}); }
}