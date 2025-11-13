# Teamtailor extension for better scorecard formatting

## Interview configuration

For the extension to be applied, the interview form needs to have the title containing `[SC]`

## Question configuration

The extension will look for the following tags in the question description:

`[DESCRIPTION]` tag allow to set a description that will be displayed as default
`[QUESTIONS]` tag is available to view questions in tooltip
`[ECHELLE]` tag can be used to set a tooltip for each note given

If you need to specify different tooltip description based on the selected level (rookie, advanced, senior, team leader, business leader), you can use the following syntax:
```
[ECHELLE ROOKIE]
1 - Ne parvient pas à raisonner ni à échanger sur les sujets abordés.
2 - Difficulté à suivre la discussion ou à argumenter.
3 - Explique certains concepts mais manque de structure ou de clarté.
4 - Communique clairement sur des sujets simples, raisonnements logiques.
5 - Montre des raisonnements avancés et échanges typiques d’un advanced.
[/ECHELLE ROOKIE]

[ECHELLE ADVANCED]
...
[/ECHELLE ADVANCED]

[ECHELLE SENIOR]
...
[/ECHELLE SENIOR]

[ECHELLE TEAM LEADER]
...
[/ECHELLE TEAM LEADER]

[ECHELLE BUSINESS LEADER]
...
[/ECHELLE BUSINESS LEADER]
```

## Complete example for a question description

```
[DESCRIPTION]
Soft skills généraliste - Qualité dans raisonnements
[/DESCRIPTION]

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
```

## Links

Chrome extension: https://chromewebstore.google.com/detail/teamtailor-form/ekgmbfhgnjoibgfnogibpemikejfeknh
