//console.log("Extension")

//creeons une fonction capable de selectionner n'importe quel données 

function getRecupere()
{
    // on va tester si la fenetre nous permet de recuperer les données
    if(window.getRecupere)
    {
        // obtention des données recuperer dans cette fenetre 
        // et appeler la fonction toString pour voir le contenu
        console.log(window.getRecupere().toString())
    }
}