let light=document.getElementById('light_id');
light.onclick=function (){
    if(light.innerHTML=='Off'){
        light.innerHTML='On'
        light.style.background='yellow'
    }else{
        light.innerHTML='Off'
        light.style.background='#fff'
    }
}