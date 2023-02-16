/*
NUMERO1
*/
var divEx1 = document.getElementById("divEx1")
if(divEx1 !=null){
    //ajouter un paragraphe
    let p = document.createElement("p")
    p.innerHTML = "Langages basés sur ECMAScript"
    divEx1.appendChild(p)

    //ajouter une liste
    let liste = document.createElement("ul")
    divEx1.appendChild(liste)

    //ajouter les items à cette liste
    let tab = ["JavaScript", "JScript", "ActionScript"]
    tab.forEach(element => {
        let item = document.createElement("li")
        item.innerHTML = element
        liste.appendChild(item)       
    });
}

/*
NUMERO2
*/
var divEx2 = document.getElementById("divEx2")
if(divEx2 !=null){
    //ajouter une liste
    let select = document.createElement("select")
    select.setAttribute('id', "colorSelect")
    divEx2.appendChild(select)

    //ajouter les items à cette liste
    let tabColors = ["Red", "Green", "Blue", "Yellow"]
    tabColors.forEach(element => {
        let option = document.createElement("option")
        option.innerHTML = element
        select.appendChild(option)       
    });
}

var btnNettoyer = document.getElementById("btnNettoyer")
if (btnNettoyer != null) {
    //ajout d'un event click
    btnNettoyer.addEventListener('click', function(){
        let colorSelect = document.getElementById("colorSelect")
        if(colorSelect != null) {
            let option = colorSelect.options[colorSelect.selectedIndex]
            colorSelect.removeChild(option)
        }
    })
}