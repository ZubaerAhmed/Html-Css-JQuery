
 function Validate()
      {
      
         if( document.myForm.lastName.value === "" )
         {
            alert( "Please provide your last name!" );
            document.myForm.lastName.focus() ;
            return false;
         }
				 
				  if( document.myForm.fastName.value === "" )
         {
            alert( "Please provide your first name!" );
            document.myForm.fastName.focus() ;
            return false;
         }
				 
				  if( document.myForm.age.value === "" )&&
					   ( document.myForm.age.value === "fld.value.length>14" )&&
						 ( document.myForm.age.value === "fld.value.length<110" )
         {
            alert( "Please provide your Age!" );
            document.myForm.address.focus() ;
            return false;
         }
				 
				  if( document.myForm.userName.value === "" )
         {
            alert( "Please provide User Name name!" );
            document.myForm.userName.focus() ;
            return false;
         }
				 
				  if( document.myForm.password.value === "" )
         {
            alert( "Please provide your Password!" );
            document.myForm.password.focus() ;
            return false;
         }
				 
				 
         
         if( document.myForm.email.value === "" )&&
				     (  document.myForm.email.value === "fld.value=@" )
         {
            alert( "Please provide your proper Email!" );
            document.myForm.email.focus() ;
            return false;
         }
				 
				  if( document.myForm.phone.value === "" )&&
					   (  document.myForm.phone.value === "fld.value=int" )
         {
            alert( "Please provide your phone number!" );
            document.myForm.phone.focus() ;
            return false;
         }
				 
				  if( document.myForm.text.value === "" )
         {
            alert( "Please write some good comment!" );
            document.myForm.text.focus() ;
            return false;
         }
 /*        
         if( document.myForm.Zip.value == "" ||
         isNaN( document.myForm.Zip.value ) ||
         document.myForm.Zip.value.length != 5 )
         {
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         
         if( document.myForm.Country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
	*/			 
         return( true );
      }