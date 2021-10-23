// controller function
function getValues() {
    // get values from user input
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // convert input to integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // input validation
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        let fbData = generateFizzbuzz(fizzValue, buzzValue);
        displayFizzbuzz(fbData);
    }
    else
        alert("Enter whole number values");
}

// logic function
function generateFizzbuzz(fizzValue, buzzValue) {
    let fbData = [];

    // generate output based on which numbers are multiples of the user input
    for (let i = 1; i <= 100; i++){
        if (i % fizzValue === 0 && i % buzzValue === 0)
            fbData.push("FizzBuzz");
        else if (i % fizzValue === 0)
            fbData.push("Fizz");
        else if (i % buzzValue === 0)
            fbData.push("Buzz");
        else
            fbData.push(i);
    }

    return fbData;
}

// display function
function displayFizzbuzz(fbData) {
    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear the table body
    tableBody.innerHTML = "";

    // add all the rows to the table
    for (let i = 0; i < fbData.length; i += 5){
        let tableRow = document.importNode(templateRow.content, true);

        // get only the columns from the template
        let rowCols = tableRow.querySelectorAll("td");

        // insert generated fizzbuzz output into table rows
        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i + 1]);
        rowCols[1].textContent = fbData[i + 1];
        
        rowCols[2].classList.add(fbData[i + 2]);
        rowCols[2].textContent = fbData[i + 2];

        rowCols[3].classList.add(fbData[i + 3]);
        rowCols[3].textContent = fbData[i + 3];

        rowCols[4].classList.add(fbData[i + 4]);
        rowCols[4].textContent = fbData[i + 4];

        // insert generated rows into the web page table
        tableBody.appendChild(tableRow);
    }
}