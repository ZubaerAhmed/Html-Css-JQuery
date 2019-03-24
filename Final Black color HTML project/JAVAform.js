 //-------One-------------------------------------------------------
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
 //---------Two-----------------------------------------------------
 
 
 function ScheduledEvent(lastName, firstName, address, 
              userName, password, email, phone, text, infourl){ 

        this.lastName = lastName;
				this.firstName = firstName; 
				this.address = address; 
        this.userName = userName;  
        this.password = password;
				this.email = email; 
        this.phone = phone;
				this.text = text;
        this.infourl = infourl;
				
				this.PrintEvent = PrintEvent;
				} 
				
				
				function PrintEvent(){ 
					 
						document.write("<br> Your name is: " + this.lastName +" "+this.firstName); 
						
						document.write("<br>Addres is: " + this.address 
						         +" <br>Your User name is: " + this.userName); 
						document.write("<br>Your Password: " + this.password );
						document.write("<br>Your email: " + this.email); 
					  document.write("<br>PHONE number: " + this.phone ); 
						document.write("<br>You wrote: " + this.text ); 
						document.write("<br>More information about the event is available at <a href=' " 
						         + this.infourl + " '> MoreInformation </a></p>");
        }
				
				function Validate() { 
				     with (document.evtForm) { 					 
						 evt = new ScheduledEvent(lastName.value, firstName.value, address.value, 
						 userName.value, password.value, email.value, phone.value, text.value); 
						 }
						   
						 with (evt) { 
						 evt.PrintEvent(); 
						 }
						  
				     return true;
				}
//----------Three----------------------------------------------------	

 var popupWindow = null;
        
        function MakePopup (event) {
            if (window.createPopup) {        //Internet Explorer
                if (!popupWindow) {
                    popupWindow = window.createPopup ();
                    var popupBody = popupWindow.document.body;
                    popupBody.style.backgroundColor = "lightblue";
                    popupBody.style.border = "solid black 1px";
                    popupBody.innerHTML = "Click outside or move the mouse over to close.";
                    popupBody.onmouseover = function () {popupWindow.hide ();};
                }
                popupWindow.show (100, 100, 150, 50, document.body);
            }
            else {
                alert ("Your browser does not support this example!");
            }
        }
 //----------Four----------------------------------------------------	
			 
 src="jquery-1.10.1.min.js"

		   $(document).ready(function(){ 
		     $("#title").click(function(){ 
		     $("#panel").slideToggle("slow"); 
		}); 
		});
		</script>
		<style type="text/css">
		#panel,#title 
		{ 
		padding:10px; 
		color:blue; 
		text-align:center; 
		background-color:red; 
		} 
		#panel 
		{ 
		padding:50px; 
		display:none; 
		}
	

	