function createTable() {
    //Write your code here
let table = document.getElementById("myTable");
	
	 let numofrow = Number(prompt("Number of rows"));
	 let numofcolumn = Number(prompt("Number of columns"));
	
	for(let i=0;i<numofrow;i++){
		
	let row = document.createElement("tr");
		
		for(let j=0;j<numofcolumn;j++){
			
let cell = document.createElement("td");
			
cell.innerHTML = `Row-${i} Column-${j}`
			
	row.appendChild(cell);
			
	}
	
	table.appendChild(row);
}
}

