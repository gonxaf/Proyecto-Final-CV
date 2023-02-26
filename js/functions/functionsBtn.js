import { dates } from "../myjs.js"

/*Funciones de cada botón en el cual se llama mediante "GetElementById" a la respectiva etiqueta padre
para luego poder realizar una validación de que si esta vació se cree una etiqueta UL y se vayan agregando
mediantes etiquetas LI los objetos de su respectivo apartado, en caso contrario se borra lo agregado
Haciendo un efecto de despliegue y repliegue */
export const aboutStudies = () => {
    const infStudies = document.getElementById("infStudies")
    if (infStudies.innerHTML == ""){
        infStudies.innerHTML = ``

        console.log(dates[0].studies.current)
        let ul = document.createElement("ul");

        ul.innerHTML = `<li>${dates[0].studies.current}</li>
                        <li>${dates[0].studies.finalized}</li>`
        infStudies.append(ul)
    }
    else{
        infStudies.innerHTML = ``;
    }
}

export const aboutSkills = () => {
    const infSkills = document.getElementById("infSkills")
    if(infSkills.innerHTML == ""){
        infSkills.innerHTML = ``

        let ul = document.createElement("ul");

        ul.innerHTML = `<li>${dates[1].skills.first}</li>
                        <li>${dates[1].skills.second}</li>
                        <li>${dates[1].skills.third}</li>
                        <li>${dates[1].skills.fpurth}</li>`
        infSkills.append(ul)
    }
    else{
        infSkills.innerHTML = ``;
    }
}

export const aboutLang = () => {
    
    const infLanguages = document.getElementById("infLanguages")
    if(infLanguages.innerHTML == ``){
        infLanguages.innerHTML = ``

        console.log(dates[0].studies.current)
        let ul = document.createElement("ul");

        ul.innerHTML = `<li>${dates[2].languages.spanish}</li>
                        <li>${dates[2].languages.english}</li>
                        <li>${dates[2].languages.french}</li>`
        infLanguages.append(ul)
    }
    else{
        infLanguages.innerHTML = ``;
    }
}

export const aboutExperience = () => {
    
    const infExperience = document.getElementById("infExperience")
    if(infExperience.innerHTML == ""){
    infExperience.innerHTML = ``

    console.log(dates[0].studies.current)
    let ul = document.createElement("ul");

    ul.innerHTML = `<li>${dates[3].experience.first}</li>
                    <li>${dates[3].experience.second}</li>
                    <li>${dates[3].experience.third}</li>`
    infExperience.append(ul)
    }
    else{
        infExperience.innerHTML = ``;
    }
}
