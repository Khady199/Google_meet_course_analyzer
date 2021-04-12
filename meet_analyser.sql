

CREATE  TABLE Classe (
    CodeClasse VARCHAR(50) PRIMARY KEY,
    NombreEtudiant INT,
    idEtudiant VARCHAR(30),
   CONSTRAINT fk_Clas_idEtudiant_Etudi FOREIGN KEY(idEtudiant)
    REFERENCES Etudiant(idEtudiant)
);

CREATE  TABLE Matiere (
    IdMatiere VARCHAR(50) PRIMARY KEY,
    NomMatiere VARCHAR(50),
    Coefficient INT
);



CREATE TABLE Etudiant (
    idEtudiant VARCHAR(30) PRIMARY KEY,
    NomEtudiant VARCHAR(50),
    PrenomEtudiant VARCHAR(50),
    Email VARCHAR(50)
);


CREATE  TABLE Choix_Etudi_Matier(
     IdEtudiant VARCHAR(30),
     IdMatiere VARCHAR(50),
     NombreDeChoix INT
 );

CREATE  TABLE Seance (
    IdSeance INT auto_increment PRIMARY KEY,
    DateDebut DATE,
    DateFin DATE,
    HeureDebut TIME,
    HeureFin TIME,
    Duree TIME
);

CREATE  TABLE EvaluSeance (
    idEtudiant VARCHAR(30),
    idSeance INT,
    NombrEvaluation INT
);

CREATE TABLE Professeur(
    Matricule VARCHAR (50) PRIMARY KEY,
    NomProf VARCHAR(50),
    PrenomProf VARCHAR(50),
    Email VARCHAR(100),
    idMatiere VARCHAR(50),
    CodeClasse VARCHAR(50),
    CONSTRAINT  fk_Prof_idMatiere_Matie FOREIGN KEY(IdMatiere)
    REFERENCES Matiere(IdMatiere) ON DELETE CASCADE,
    CONSTRAINT fk_Prof_CodeClasse_Class FOREIGN KEY(CodeClasse)
    REFERENCES Classe(CodeClasse)
);


