//console.log("Extension")

//créeons une fonction capable de selectionner n'importe quelles données 

function getRecupere()
{
    // on va tester si la fenêtre nous permet de recuperer les données
    if(window.getRecupere)
    {
        // obtention des données recuperées dans cette fenêtre 
        // et appel de la fonction toString pour voir le contenu
        console.log(window.getRecupere().toString())
    }
}
