
// adding  click event listener in blog button for page redirection
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})

//adding click event triangle's calculate button
document.getElementById('btn-tricalculate').addEventListener('click', function(e){
   // get the input field of triangle base and height
   const triangleBaseInputField = getInputFieldValueById('tri-base-input');
   const triangleHeightInputField = getInputFieldValueById('tri-height-input');
   if(isNaN(triangleBaseInputField) && isNaN(triangleHeightInputField)){
    alert('please enter a valid number');
    return;
   }
   
   // update the triangle base and height in the area formula

   const triangleBaseElement =  setTextElementValueById('tri-base', triangleBaseInputField);
   

   const triangleHeightElement = setTextElementValueById('tri-height', triangleHeightInputField);
   // calculate the triangle area value and show it in the area calculation box
   const input1 = triangleBaseInputField;
  

   const input2 = triangleHeightInputField;

   const triAreaTotalAllDecimal = 0.5 * input1 * input2;
   const triAreaTotal = triAreaTotalAllDecimal.toFixed(2);
   


    const calcuName = e.target.parentNode.children[1].innerText;

    areaCalculationElementShow(calcuName, triAreaTotal);
   
    
   
        
   
 
 
})

//adding click event rectangle's calculate button

document.getElementById('btn-reccalculate').addEventListener('click', function(e){
    // get the input field of rwctangle width and length
    const rectangleWidthInputField = getInputFieldValueById('rec-width-input');
    const rectangleHeightInputField = getInputFieldValueById('rec-length-input');
    if(isNaN(rectangleWidthInputField) && isNaN(rectangleHeightInputField)){
     alert('please enter a valid number');
     return;
    }
    
    // update the rectangle width and length in the area formula
 
    const rectangleWidthElement =  setTextElementValueById('rec-width', rectangleWidthInputField);
    
 
    const rectangleLengthElement = setTextElementValueById('rec-length', rectangleHeightInputField);
    // calculate the rectangle area value and show it in the area calculation box
    const input1 = rectangleWidthInputField
   
 
    const input2 = rectangleHeightInputField;
 
    const recAreaTotalAllDecimal =  input1 * input2;
    const recAreaTotal = recAreaTotalAllDecimal.toFixed(2);
    
 
 
     const calcuName = e.target.parentNode.children[1].innerText;
 
     areaCalculationElementShow(calcuName, recAreaTotal);
    
     
    
         
    
  
  
 })

