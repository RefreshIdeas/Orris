//fixed Header On scroll


window.addEventListener('scroll', function (e) {

    if(this.window.scrollY > 100){
this.document.querySelector('header').classList.add('scrollActive')    
}else{
this.document.querySelector('header').classList.remove('scrollActive')    
     
}


  })