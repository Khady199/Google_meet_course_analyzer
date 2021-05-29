
use meet_analyzer;
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
    IdSeance INT,
    NoteEvaluation INT,
    suggestion VARCHAR(50),
    CONSTRAINT fk_Eval_Etud FOREIGN KEY (IdEtudiant)
    REFERENCES Classe (IdEtudiant),
    CONSTRAINT fk_Eval_Seance FOREIGN KEY (IdSeance)
    REFERENCES Classe (IdSeance)
);
--creons et  donnons les privilèges à l'utilisateur Professeur

create user Professeur@'%' idenfied by "passer";
grant select on meet_analyzer.Classe to Professeur@'localhost';
grant select on meet_analyzer.Matiere to Professeur@'localhost';
grant all privilèges on meet_analyzer.Seance to Professeur@'localhost';

--creons et donnons les privilèges à l'utilisateur Etudiant

create user Etudiant@'%' idenfied by "passer";
grant select on meet_analyzer.* to Etudiant@'localhost';
--
-- Table structure for table `Reponse`
CREATE TABLE Reponse(
  r1 int(4) NOT NULL,
  r2 int(4) NOT NULL,
  r3 int(4) NOT NULL,
  r4 int(4) NOT NULL,
  r5 int(4) NOT NULL,
  r6 int(4) NOT NULL,
  r7 int(4) NOT NULL,
  r8 int(4) NOT NULL,
  r9 int(4) NOT NULL,
  r10 int(4) NOT NULL,
  r11 int(4) NOT NULL,
  r12 int(4) NOT NULL,
  r13 int(4) NOT NULL,
  r14 int(4) NOT NULL,
  r15 int(4) NOT NULL,
  r16 int(4) NOT NULL,
  r17 int(4) NOT NULL,
  r18 int(4) NOT NULL,
  `suggest` varchar(1000) NOT NULL,
  `idpart` varchar(255) NOT NULL,
  `idsea` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Triggers `Reponse`
--
DELIMITER $$
CREATE TRIGGER `meet` AFTER INSERT ON `Reponse` FOR EACH ROW BEGIN
SET @NoteEvaluation = ((new.r1+new.r2+new.r3+new.r4+new.r5+new.r6+new.r7+new.r8+new.r9+new.r10+new.quest11+new.r12+new.r13+new.r14+new.r15+new.r16+new.r17+new.r18)*20)/72;
SET @IdEtudiant = new.IdEtudiant;
SET @IdSeance = new.IdSeance;
SET @suggestion = new.suggestion;
INSERT INTO evaluation VALUES (@IdEtudiant, @IdSeance, @NoteEvaluation, @suggestion);
END
$$
DELIMITER ;





