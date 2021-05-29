-- Triggers `Reponse`
--
DELIMITER $$
CREATE TRIGGER `Evaluation` AFTER INSERT ON `Reponse` FOR EACH ROW BEGIN
SET @NoteEvaluation = ((new.r1+new.r2+new.r3+new.r4+new.r5+new.r6+new.r7+new.r8+new.r9+new.r10+new.quest11+new.r12+new.r13+new.r14+new.r15+new.r16+new.r17+new.r18)*20)/72;
SET @IdEtudiant = new.IdEtudiant;
SET @IdSeance = new.IdSeance;
SET @suggestion = new.suggestion;
INSERT INTO evaluation VALUES (@IdEtudiant, @IdSeance, @NoteEvaluation, @suggestion);
END
$$
DELIMITER ;
