let light=document.getElementById('light_id');
light.onclick=function (){
    if(light.innerHTML='Off'){
        light.innerHTML='On'
        light.style.color='red'
        light.style.background='yellow'
    }
}