let array=["imgcarru/River_Plate.jpg","imgcarru/Racing.jpg","imgcarru/Argentinos.jpg","imgcarru/velez.jpg","imgcarru/San Lorenzo.jpg"];
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