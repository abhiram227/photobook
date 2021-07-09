var img =["https://storage.googleapis.com/manabadi-prod.appspot.com/pics/E0A4D005561C486688D8239119D0D92E",
"https://lh3.googleusercontent.com/ogw/ADea4I7-UsbJak8vHoLVDxVsVC3lM3kO5dqVBwlozL3QBA=s192-c-mo",
"https://www.bing.com/images/blob?bcid=T0UctwM5QPIChDPEGfZhJIJ4AWxG.....24"]
var names=["Abhiram Madineedi","Madhavi Bollina","Ramesh Madineedi"]

var i=0
function update(){
    i++;
    var number_of_family_members_in_array = 5
    if(i> number_of_family_members_in_array)
    {
        i=0;
    }
    var updateImage = img[i]
    var updateName = names[i]
    document
}
var i=0
function update(){
    i++;
    var number_of_family_members_in_array = 2
    if(i> number_of_family_members_in_array)
    {
        i=0;
    }
    var updateImage = img[i]
    var updateName = names[i]
    document.getElementById("Famaliy_member_pic").src = updateImage
    document.getElementById("Famaliy_member_name").src = updateName
}
