
// this function is used for taking input fields number values
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

   
    return inputFieldValue;
}

//it is  used for setting the value in text type elements


function setTextElementValueById(elemetId, newValue){
    const element = document.getElementById(elemetId);
    element.innerText = newValue;
}

// this function will take any shapename and and returns the area value in a table row manner
function areaCalculationElementShow(shapeName, areaValue){
   
    const container = document.getElementById("table-container")
    const tr = document.createElement("tr");
    tr.classList.add('table-row');
   
    tr.innerHTML = `
        
        <td class="px-1">${shapeName}</td>
        <td class="px-2"> <span id="area-value">${areaValue}</span>  cm<sup>2</sup> </td>
        <td ><button class="bg-sky-400 py-2 px-3  bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-200">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr)
}


//the next line of codes will help on generating a random color when user's mouse enters a  triangle's card

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}

function randomColorGenerator(){
    
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    const randomNumber = getRandomNumber();

    document.getElementById('common-div1').style.backgroundColor = hexColor;
    
    


    color.textContent = hexColor;
}


