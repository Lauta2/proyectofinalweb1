let array=["imgcarru/River.jpg","imgcarru/Racing.jpg","imgcarru/Argentinos.jpg","imgcarru/San Lorenzo.jpg"];
    let im = document.getElementById("foto");
    let cont = 0;

    function anterior(){
        if(cont===0){
            cont = array.length -1;
        }else{
            cont--;
        }
        im.src = array[cont];
    }

    function siguiente(){
        if(cont===array.length -1){
            cont =0;
        }else{
            cont++;
        }
        im.src = array[cont];
    }   
let array1=["imgcarru2/Di Maria.jpg","imgcarru2/Fernando Redondo.jpg","imgcarru2/Messi.jpg","imgcarru2/Tevez.jpg","imgcarru2/Zanetti.jpeg"];
let im1 = document.getElementById("foto1");
let cont1 = 0;

function anterior1(){
    if(cont1===0){
        cont1 = array1.length -1;
    }else{
        cont1--;
    }
    im1.src = array1[cont1];
}

function siguiente1(){
    if(cont1===array1.length -1){
        cont1 =0;
    }else{
        cont1++;
    }
    im1.src = array1[cont1];
}   