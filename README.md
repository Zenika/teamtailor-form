# Teamtailor extension for better scorecard formatting

## Interview configuration on teamtailor

For the extension to be applied, the interview needs to have the title containing `Entretien technique Dev`

## Question configuration on teamtailor

`[QUESTIONS]` tag is mandatory. If you do not want to add questions, just leave it empty.

If an `[ECHELLE ...]` tag is missing, the tooltip will show `Non précisé` by default.

```
Soft skills généraliste - Qualité dans raisonnements

[QUESTIONS]
Présentation respectives. Est ce que tu peux nous parler du projet que tu as préféré et pourquoi ? Expérience la plus significative de ton expérience pour toi ? 
[/QUESTIONS]

[ECHELLE ROOKIE]
1 - Ne parvient pas à raisonner ni à échanger sur les sujets abordés.
2 - Difficulté à suivre la discussion ou à argumenter.
3 - Explique certains concepts mais manque de structure ou de clarté.
4 - Communique clairement sur des sujets simples, raisonnements logiques.
5 - Montre des raisonnements avancés et échanges typiques d’un advanced.
[/ECHELLE ROOKIE]

[ECHELLE ADVANCED]
1 - Raisonnement très limité ou incohérent sur les sujets abordés.
2 - Difficulté à relier les idées ou approfondir les raisonnements.
3 - Raisonne correctement mais superficiellement ou sans nuance.
4 - Explique clairement les concepts complexes et structure bien ses raisonnements.
5 - Montre des compétences typiques d’un senior : anticipe impacts et enjeux complexes, argumente avec fluidité.
[/ECHELLE ADVANCED]

[ECHELLE SENIOR]
1 - Ne parvient pas à échanger ou à raisonner sur les sujets complexes.
2 - Difficulté ponctuelle à structurer ou approfondir certains sujets.
3 - Raisonnement solide mais certaines situations complexes nécessitent validation.
4 - Maîtrise le sujet, anticipe impacts et enjeux, argumente clairement.
5 - Excelle et peut guider ou former au-delà des attendus (référence interne très forte).
[/ECHELLE SENIOR]

[ECHELLE TEAM LEADER]
1 - Ne parvient pas à échanger ou à raisonner sur les sujets complexes.
2 - Difficulté ponctuelle à structurer ou approfondir certains sujets.
3 - Raisonnement solide mais certaines situations complexes nécessitent validation.
4 - Maîtrise le sujet, anticipe impacts et enjeux, argumente clairement.
5 - Excelle et peut guider ou former au-delà des attendus (référence interne très forte).
[/ECHELLE TEAM LEADER]

[ECHELLE BUSINESS LEADER]
1 - Ne parvient pas à échanger ou à raisonner sur les sujets complexes.
2 - Difficulté ponctuelle à structurer ou approfondir certains sujets.
3 - Raisonnement solide mais certaines situations complexes nécessitent validation.
4 - Maîtrise le sujet, anticipe impacts et enjeux, argumente clairement.
5 - Excelle et peut guider ou former au-delà des attendus (référence interne très forte).
[/ECHELLE BUSINESS LEADER]
```
