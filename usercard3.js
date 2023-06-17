let dhonioldinfo={
    imgurl: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2016/09/ms-dhoni-1474525188.jpg",
    name: "Dhoni",
    Description: "Railways TC"
}
let displayobject={
  name:"",imgurl:"",Description:""
};
let getRandomUser= function(){
  fetch("https://randomuser.me/api")
  .then(response =>response.json())
  .then(data=>{
    displayobject.name=data.results[0].name.first+" "+data.results[0].name.last
    displayobject.imgurl=data.results[0].picture.large
    displayobject.Description=data.results[0].gender
    document.getElementById("img-dhoni").src=displayobject.imgurl;
    document.getElementById("name-dhoni").innerHTML=displayobject.name;
    document.getElementById("des-dhoni").innerHTML=displayobject.Description;
  })
}