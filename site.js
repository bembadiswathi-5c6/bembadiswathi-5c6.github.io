var data1={image:"./Images/ABC.png",name: "Swathi", designation: "Student"};
var data2={image:"./Images/DEF.jpeg",name: "bembadi swathi reddy", designation: "Intern"};
var isdata1=true;
var display_data;
var change_my_pic=function(){
    if(isdata1)
    {
        display_data=data2;
        isdata1=false;
    }
    else
    {
        display_data=data1;
        isdata1=true;
    }
    document.getElementById("my_image").src=display_data.image;
    document.getElementById("my_name").innerHTML=display_data.name;
    document.getElementById("my_designation").innerHTML=display_data.designation;
}