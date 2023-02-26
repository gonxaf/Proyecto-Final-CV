//Funcion en donde hace el llamado del JSON para luego retornar los objetos del mismo 

export const verifyDates = async () =>{
    let dates = [];
    
    await fetch("JSON/date.json")
    .then( response => response.json())
    .then( data => dates = data);
    
    return dates
}


