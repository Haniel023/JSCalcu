
 function dis(val) 
 { 
     document.getElementById("result").value+=val 
 } 
   
 function solve() 
 { 
     let x = document.getElementById("result").value 
     let y = eval(x) 
     document.getElementById("result").value = y 
 } 
    
 function clr() 
 { 
     document.getElementById("result").value = "" 
 } 

 function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}