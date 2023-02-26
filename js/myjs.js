import { aboutExperience, aboutLang, aboutSkills, aboutStudies } from "./functions/functionsBtn.js";
import { verifyDates } from "./functions/verifyDates.js";

/*Primero se llama a las imporataciones de los demas archivos*/
//Se define la constante Dates como array
export const dates = [] ;

//Se crea una arrow function "main" la cual va a inicializar la APP//
const main = async () => {
    dates.push(...await verifyDates())

    //Se llama por getelementbyid a su respectivo boton, para asignar una variable a cada uno
    const btnStudies = document.getElementById("btnStudies")
    const btnSkills = document.getElementById("btnSkills")
    const btnLanguages = document.getElementById("btnLanguages")
    const btnExperience = document.getElementById("btnExperience")
    
    //Se le asigna una función a cada botón de las cuales cada una va a ser el despliegue y repliegue de info
    btnStudies.addEventListener("click", () => aboutStudies())
    btnSkills.addEventListener("click", () => aboutSkills())
    btnLanguages.addEventListener("click", () => aboutLang())
    btnExperience.addEventListener("click", () => aboutExperience())

    }

    //Se llama a la función main para inicializar el programa
main()
    

    

    