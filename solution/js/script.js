// function myFun () {
// 	document.getElementById("demo").innerHTML="cajkchakd";
// }


// function pic1()
//         {
//             document.getElementById("img").src = "images\InteriorDesign.jpg";
//         }
        
//         function pic2()
//         {
//             document.getElementById("img").src ="picture 2 source";
//         }

   function pic1()
        {
            document.getElementById("img").src = "images/fashionAccessories/GroomingAccessories.jpg";
            document.getElementById("img1").src = "images/fashionAccessories/GroomingAccessories1.jpg";
            document.getElementById("img2").src = "images/fashionAccessories/GroomingAccessories2.jpg";
            document.getElementById("img3").src = "images/fashionAccessories/GroomingAccessories3.jpg";
            document.getElementById("img4").src = "images/fashionAccessories/GroomingAccessories4.jpg";
            document.getElementById("img5").src = "images/fashionAccessories/GroomingAccessories5.jpg";
        }
	function pic2(){
        	document.getElementById("img").src = "images/fashionAccessories/Earrings.jpeg";
            document.getElementById("img1").src = "images/fashionAccessories/Earrings1.jpeg";
            document.getElementById("img2").src = "images/fashionAccessories/Earrings2.jpeg";
            document.getElementById("img3").src = "images/fashionAccessories/Earrings3.jpeg";
            document.getElementById("img4").src = "images/fashionAccessories/Earrings4.jpeg";
            document.getElementById("img5").src = "images/fashionAccessories/Earrings5.jpeg";
        }       
	function pic3(){
        	document.getElementById("img").src="images/fashionAccessories/Watches.jpg";
            document.getElementById("img1").src = "images/fashionAccessories/Watches1.jpg";
            document.getElementById("img2").src = "images/fashionAccessories/Watches2.jpg";
            document.getElementById("img3").src = "images/fashionAccessories/Watches3.jpg";
            document.getElementById("img4").src = "images/fashionAccessories/Watches4.jpg";
            document.getElementById("img5").src = "images/fashionAccessories/Watches5.jpg";
        }           
    function pic4(){
    		document.getElementById("img").src = "images/fashionAccessories/Bag.jpg"
            document.getElementById("img1").src = "images/fashionAccessories/Bag1.jpg";
            document.getElementById("img2").src = "images/fashionAccessories/Bag2.jpg";
            document.getElementById("img3").src = "images/fashionAccessories/Bag3.jpg";
            document.getElementById("img4").src = "images/fashionAccessories/Bag4.jpg";
            document.getElementById("img5").src = "images/fashionAccessories/Bag5.jpg";
        }
    function pic5(){
    		document.getElementById("img").src = "images/fashionAccessories/Baby.jpg"
            document.getElementById("img1").src = "images/fashionAccessories/Baby1.jpg";
            document.getElementById("img2").src = "images/fashionAccessories/Baby2.jpg";
            document.getElementById("img3").src = "images/fashionAccessories/Baby3.jpg";
            document.getElementById("img4").src = "images/fashionAccessories/Baby4.jpg";
            document.getElementById("img5").src = "images/fashionAccessories/Baby5.jpg";
        }                   




function customerDetails() {
            var un = document.getElementById("cname").value;
          
            if(un===""){
             alert("Enter name");   
            }
            else{
            document.getElementById("username").innerHTML = un;
                }
}

function bankingCustomerDetails() {
            var bcName = document.getElementById("bankCName").value;
            var bcEmailid= document.getElementById("emailid").value;
            var bcMobileNo=document.getElementById("mobileno").value;
            var bcServices=document.getElementById("services").value;

            
             if(bcName ===""){
             alert("Please enter name");   
            }
            else if(bcEmailid ===""){
             alert("Please enter Email id");   
            }
            else if(bcMobileNo ===""){
             alert("Please enter Mobile no");   
            }
            else if(bcServices ===""){
             alert("Please enter Type of Service");   
            }
            else{
            var bcNameview ="Thank you "+bcName+ " we will get back to you on "+bcServices+ " service"    
            document.getElementById("displaybcname").innerHTML=bcNameview;     
            // document.getElementById("displayemailid").innerHTML= bcEmailid; 
            // document.getElementById("displayMobileNo").innerHTML=bcMobileNo;
            // document.getElementById("displayServices").innerHTML=bcServices;    
            }    
}
 