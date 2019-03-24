
function onClickHandler() {

var index = Math.round(Math.random() * 9);
var ColorValue = "F6E3CE"; // default color  (index = 0)

if(index == 1)
  ColorValue = "FFCCCC"; //peach
else if(index == 2)
  ColorValue = "CCAFFF"; //violet
else if(index == 3)
  ColorValue = "A6BEFF"; //lt blue
else if(index == 4)
  ColorValue = "99FFFF"; //cyan
else if(index == 5)
  ColorValue = "D5CCBB"; //tan
else if(index == 6)
  ColorValue = "99FF99"; //lt green
else if(index == 7)
  ColorValue = "FFFF99"; //lt yellow
else if(index == 8)
  ColorValue = "FFCC99"; //lt orange
else if(index == 9)
  ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

//-------------------------------------------------------------------------------------------------------

            
					  var myimage = document.getElementById("myPhoto");
					  var imageArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
						             '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
             /*   i = 1;
            // preload
            for (var j=images.length; j--;) {
                var img = new Image();
                img.src = images[j];
            }
            // event handler
            document.getElementById('Button').addEventListener('click', function() {
                this.src = images[i >= images.length - 1 ? i = 0 : ++i];
            }, false);    */
						var imageIndex=0;
						function changeImage(){
						myPhoto.setAttribute("src", imageArray [ imageIndex]);
						imageIndex++;
						if(imageIndex>=imageArray.length){
						imageIndex=0;
						}
						}
						var intervalHandle = setInterval(changeImage, 3000);
						
//						myPhoto.onclick=function(){
//						clearInterval(intervalHandle);
//						}	
