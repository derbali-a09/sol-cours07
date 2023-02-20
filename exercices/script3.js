//document.addEventListener('load', function(){
//})

fetch('students.json')
    .then(response => { return response.json() }) // cette instruction sert à convertir un text en mémoire sous format JSON 
    .then(data => {
        //traitement de données
        let titre = document.getElementById('titre')
        titre.innerHTML = 'Il y a ' + data.notes.length + ' étudiants trouvés'

        //remplissage du tableau des étudiants
        let tbody = document.getElementById('tabEx3')
        for (let index = 0; index < data.notes.length; index++) {
            let etudiant = data.notes[index]
            //créer une ligne
            let ligne = document.createElement('tr')

            //créer une colonne nom complet
            let colNomComplet = document.createElement('td')
            colNomComplet.innerHTML = etudiant.prenom + ' ' + etudiant.nom

            //créer une colonne note
            let colNote = document.createElement('td')
            colNote.innerHTML = etudiant.note
            colNote.setAttribute('name', 'note')

            //ajouter les 2 colonnes à la ligne
            ligne.appendChild(colNomComplet)
            ligne.appendChild(colNote)

            //ajouter la ligne au tableau
            tbody.appendChild(ligne)
        }
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=>{
        console.log('fin de FETCH')
    })

var btnStyle = document.getElementById('btnStyle')
btnStyle.addEventListener('click', function () {
    let tabNotes = document.getElementsByName('note')
    for (let index = 0; index < tabNotes.length; index++) {
        if (tabNotes[index].innerHTML >= 60){
            tabNotes[index].style.color = "#00FF00" //vert
            //créer une image
            let image = document.createElement('img')
            image.setAttribute('src', 'check-bold.svg')
            image.setAttribute('width', '24px')
            image.setAttribute('heigth', '24px')
            tabNotes[index].appendChild(image)
        }
        else
            tabNotes[index].style.color = "#FF0000" //rouge

    }
})