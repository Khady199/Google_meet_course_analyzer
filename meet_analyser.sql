
create database GoogleAnalyzer;
use GoogleAnalyzer

CREATE  TABLE Matiere (
    IdMatiere INT PRIMARY KEY,
    NomMatiere VARCHAR(50),
    Coefficient INT
);

CREATE  TABLE Seance (
    IdSeance INT auto_increment PRIMARY KEY,
    DateDebut DATE,
    DateFin DATE,
    HeureDebut TIME,
    HeureFin TIME,
    Duree TIME
);

CREATE  TABLE Classe (
    CodeClasse VARCHAR(50) PRIMARY KEY,
    NombreEtudiant INT,
    IdMatiere INT,
    CONSTRAINT fk_Classe_Matiere FOREIGN KEY (IdMatiere)
    REFERENCES Matiere (IdMatiere)
);

CREATE TABLE Professeur(
    Matricule VARCHAR (50) PRIMARY KEY,
    NomProf VARCHAR(50),
    PrenomProf VARCHAR(50),
    Email VARCHAR(100),
    CodeClasse VARCHAR(50),
    CONSTRAINT fk_Prof_Classe FOREIGN KEY (CodeClasse)
    REFERENCES Classe (CodeClasse)
);

CREATE TABLE Etudiant (
    IdEtudiant INT PRIMARY KEY,
    NomEtudiant VARCHAR(50),
    PrenomEtudiant VARCHAR(50),
    Email VARCHAR(50)
);

CREATE  TABLE Evaluation (
    IdEtudiant INT primary key,
    IdSeance INT primary key,
    NombrEvaluation INT,
    CONSTRAINT fk_Eval_Etud FOREIGN KEY (IdEtudiant)
    REFERENCES Classe (IdEtudiant),
    CONSTRAINT fk_Eval_Seance FOREIGN KEY (IdSeance)
    REFERENCES Classe (IdSeance)
);



--creons et  donnons les privilèges à l'utilisateur Professeur

create user Professeur@'%' idenfied by "passer";
grant select on GoogleAnalyzer.Classe to Professeur@'localhost';
grant select on GoogleAnalyzer.Matiere to Professeur@'localhost';
grant all privilèges on GoogleAnalyzer.Seance to Professeur@'localhost';

--creons et donnons les privilèges à l'utilisateur Etudiant

create user Etudiant@'%' idenfied by "passer";
grant select on GoogleAnalyzer.* to Etudiant@'localhost';


