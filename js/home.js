class Home {

constructor(){
this.viewtask= createButton("View task")
this.entertask= createButton("Enter task")
this.image=createImg("Images/cleaning.jpg")

}


display(){
this.image.style("width","900px")
this.image.position(280,100)
this.entertask.position(120,150)
this.viewtask.position(1250,150)
this.viewtask.style("border-width", "6px")
this.viewtask.style("border-style","inset")
this.viewtask.style("font-size","25px")

this.entertask.style("border-width", "6px")
this.entertask.style("border-style","inset")
this.entertask.style("font-size","25px")

this.entertask.mousePressed(()=>{
    form=new Form()
    form.display()
    this.image.hide()
    this.entertask.hide()
    this.viewtask.hide()

})
this.viewtask.mousePressed(()=>{
    viewtask=new Viewtask()
   viewtask.view()
    this.image.hide()
    this.entertask.hide()
    this.viewtask.hide()
 viewtask.display()

})
}
}