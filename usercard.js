let swamioldinfo={
    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Swami_Vivekananda_1893_Scanned_Image.jpg/1200px-Swami_Vivekananda_1893_Scanned_Image.jpg">
    name="swami"
    Description="Teaching"
}
let swamiyounginfo={
    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Swami_Vivekananda-1893-09-signed.jpg/800px-Swami_Vivekananda-1893-09-signed.jpg">
    name="Swami_Vivekananda"
    Description="philosophy"
}
let isswamiold = true;
let displayobject;
let flipdata = function(){
    if(isswamiold == true){
      displayobject=swamiyounginfo;
      swamioldinfo=false;
    }
    else{
        displayobject=swamioldinfo;
        swamioldinfo=true;
    }
    document.getelementById("swami-image").src=displayobject.imgurl;
    document.getelementById("swami-name").innerHTML=displayobject.name;
    document.getelementById("Swami-description").innerHTML=displayobject.Description;
}