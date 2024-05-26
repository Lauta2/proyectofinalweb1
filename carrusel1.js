let array2=["imgcarru/River.jpg","imgcarru/Racing.jpg","imgcarru/Argentinos.jpg","imgcarru/San lorenzo.jpeg"];
    let im2 = document.getElementById("foto2");
    let cont2 = 0;

    function anterior2(){
        if(cont2===0){
            cont2 = array2.length -1;
        }else{
            cont2--;
        }
        im2.src = array2[cont2];
    }

    function siguiente2(){
        if(cont2===array2.length -1){
            cont2 =0;
        }else{
            cont2++;
        }
        im2.src = array2[cont2];
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