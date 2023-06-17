let dhonioldinfo={
    imgurl: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2016/09/ms-dhoni-1474525188.jpg",
    name: "Dhoni",
    Description: "Railways TC"}
let dhoniyounginfo={
    imgurl: "https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "M.S.Dhoni",
    Description: "indian crickter"}
let isdhoniold=true;
let displayobject;
let flipdata= function(){
    if(isdhoniold == true)
    {
        displayobject=dhoniyounginfo;
        isdhoniold=false;
    }
    else{
        displayobject=dhonioldinfo;
        isdhoniold=true;
    }
    document.getElementById("img-dhoni").src=displayobject.imgurl;
    document.getElementById("name-dhoni").innerHTML=displayobject.name;
    document.getElementById("des-dhoni").innerHTML=displayobject.Description;

}