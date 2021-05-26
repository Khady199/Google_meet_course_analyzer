CREATE TRIGGER evaluation  AFTER INSERT
 --creation du trigger
   
      --AFTER INSERT sert à définir quand et comment le trigger est declancher
  
    ON TABLE evalution FOR EACH ROW
       --on définit sur quelle table le trigger est attaché
     -- FOR EACH ROW signifie 'pour chaque ligne ' exemple sur chaque ligne insérée/supprimer/modifier
      
        SELECT avg(note_evaluation) FROM evaluation;
           --on calcul la moyenne des note de l'evaluation dans la table evaluation
            
         
            
