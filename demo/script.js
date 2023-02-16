fetch('banques.json')
    .then(reponse => {
        return reponse.json()
    })
    .then(donnees =>{
        //ici les données sont prêtes
        //console.log(donnees)
        // let pays = document.getElementById("pays")
        // pays.innerHTML = donnees.pays
        // let nomBanque = document.getElementById("nomBanque")
        // for (let index = 0; index < donnees.banques.length; index++) {
        //     if(donnees.banques[index].name == 'Banque Nationale'){
        //         nomBanque.innerHTML = donnees.banques[index].telephone  
        //         break
        //     }
        // }

        //1. trouver le parent
        let parent = document.getElementById("divBanques")
        for (let index = 0; index < donnees.banques.length; index++) {
            //2.créer l'enfant paragraphe
            let paragraphe = document.createElement("p")
            paragraphe.innerHTML =  donnees.banques[index].name  
            
            //3. lier l'enfant au parent
            parent.appendChild(paragraphe)
        }
        
    })