Professeur(Matricule, NomProf, PrenomProf, Email, #CodeClasse)
Etudiant(idEtudiant, nomEtudiant, prenomEtudiant, Email)
Classe(CodeClasse, NombreEtu, #idMatiere)
Matiere(idMatiere, NomMatiere, Coefficient)
Seance(idSeance, DateDebut, DateFin, HeureDebut, HeureFin, Duree)
Evaluation(#idEtudiant, #idSeance, noteEvaluation)
