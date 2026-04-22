(function() {
    // TAGS
    const DESCRIPTION_TAG = 'DESCRIPTION';
    const ECHELLE_TAG = 'ECHELLE';
    const ECHELLE_ROOKIE_TAG = 'ECHELLE ROOKIE';
    const ECHELLE_ADVANCED_TAG = 'ECHELLE ADVANCED';
    const ECHELLE_SENIOR_TAG = 'ECHELLE SENIOR';
    const ECHELLE_TEAM_LEADER_TAG = 'ECHELLE TEAM LEADER';
    const ECHELLE_BUSINESS_LEADER_TAG = 'ECHELLE BUSINESS LEADER';
    const QUESTIONS_TAG = 'QUESTIONS';

    // CONFIGURATIONS
    const INTERVIEW_FORM_NAME = '[SC]';

    // SELECTORS
    const SELECTOR_SIDEBAR = 'aside';
    const SELECTOR_TITLE = 'aside h2';
    const SELECTOR_FULLSCREEN_BUTTON_WRAPPER = 'aside div';
    const SELECTOR_CHECKED_LEVEL = 'aside input:checked';
    const SELECTOR_QUESTIONS = 'aside label';
    const SELECTOR_QUESTION_TITLE = '.tt-form-label-text';
    const SELECTOR_QUESTION_DETAIL = '.body-text-xs';
    const SELECTOR_ECHELLE_BUTTON = 'button.body-text-s-semibold';

    // CLASSES
    const CLASS_FULLSCREEN = 'fullscreen';
    const CLASS_FULLSCREEN_BUTTON = 'btn-fullscreen';
    const CLASS_BUTTON_SECONDARY = 'c-button__appearance--secondary';
    const CLASS_BUTTON_PRIMARY = 'c-button__appearance--primary';
    const CLASS_BUTTON_SMALL = 'c-button__size--small';

    let level;
    let questionsState = [];

    /**
     * Init the script
     */
    function update() {
        if(!isOnInterviewPage()) return;

        addFullscreenButton();

        const newLevel = getLevel();
        const levelChanged = newLevel !== level;
        level = newLevel;

        if(hasDescriptionTags()) {
            setQuestions();
        } else if(levelChanged) {
            questionsState.forEach(item => setEchelle(item));
        }
    }

    function setQuestions() {
        const state = [];
        const questions = document.querySelectorAll(SELECTOR_QUESTIONS);
        questions.forEach((question) => prepareQuestion(question, state));
        if(state.length !== 0) {
            questionsState = state;
            state.forEach((item) => {
                setDescription(item);
                setQuestion(item);
                setEchelle(item);
            });
        }
    }

    /**
     * Prepare the question data to be applied
     * @param question
     * @param state
     */
    function prepareQuestion(question, state) {
        const questionDetail = question.querySelector(SELECTOR_QUESTION_DETAIL);

        if(questionDetail && questionDetail.innerText && questionDetail.innerText.includes('[DESCRIPTION]')) {
            state.push({
                element: question,
                elementDetail: questionDetail,
                description: extract(questionDetail.innerText, DESCRIPTION_TAG),
                questions: extract(questionDetail.innerText, QUESTIONS_TAG),
                legends: {
                    generic: parseEchelle(questionDetail.innerText, ECHELLE_TAG),
                    rookie: parseEchelle(questionDetail.innerText, ECHELLE_ROOKIE_TAG),
                    advanced: parseEchelle(questionDetail.innerText, ECHELLE_ADVANCED_TAG),
                    senior: parseEchelle(questionDetail.innerText, ECHELLE_SENIOR_TAG),
                    'team leader': parseEchelle(questionDetail.innerText, ECHELLE_TEAM_LEADER_TAG),
                    'business leader': parseEchelle(questionDetail.innerText, ECHELLE_BUSINESS_LEADER_TAG),
                },
            });
        }
    }

    /**
     * Set the question description
     * @param item
     */
    function setDescription (item) {
        item.elementDetail.innerText = item.description;
        item.elementDetail.style.whiteSpace = 'normal';
    }

    /**
     * Set the question button/icon and tooltip
     * @param item
     */
    function setQuestion (item) {
        if(item.questions && item.questions !== '') {
            const questionTitle = item.element.querySelector(SELECTOR_QUESTION_TITLE);
            const questionButton = document.createElement('button');
            const questionIcon = document.createElement('img');

            questionIcon.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIHY3LjEuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIENvcHlyaWdodCAyMDI1IEZvbnRpY29ucywgSW5jLi0tPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMDguMiAzMjIuN0MxMTQuMyAzMDcuNSAxMTIuMiAyOTAuMSAxMDIuNiAyNzYuOEM4OC4xIDI1Ni43IDgwIDIzMy4xIDgwIDIwOEM4MCAxNDEuMiAxNDAuNSA4MCAyMjQgODBDMzA3LjUgODAgMzY4IDE0MS4yIDM2OCAyMDhDMzY4IDI3NC44IDMwNy41IDMzNiAyMjQgMzM2QzIwOC4xIDMzNiAxOTIuOSAzMzMuNyAxNzguNyAzMjkuNUMxNjguNCAzMjYuNCAxNTcuMyAzMjcgMTQ3LjMgMzMxTDk2LjkgMzUxLjJMMTA4LjMgMzIyLjd6TTMyIDIwOEMzMiAyNDMuOCA0My42IDI3Ny4xIDYzLjcgMzA0LjhMMzMuOSAzNzkuMkMzMi42IDM4Mi40IDMyIDM4NS44IDMyIDM4OS4yQzMyIDQwNCA0NCA0MTYgNTguOCA0MTZDNjIuMiA0MTYgNjUuNiA0MTUuMyA2OC44IDQxNC4xTDE2NS4xIDM3NS42QzE4My43IDM4MS4xIDIwMy41IDM4NCAyMjQgMzg0QzMzMCAzODQgNDE2IDMwNS4yIDQxNiAyMDhDNDE2IDExMC44IDMzMCAzMiAyMjQgMzJDMTE4IDMyIDMyIDExMC44IDMyIDIwOHpNNDE2IDU3NkM0MzYuNiA1NzYgNDU2LjMgNTczIDQ3NC45IDU2Ny42TDU3MS4yIDYwNi4xQzU3NC40IDYwNy40IDU3Ny44IDYwOCA1ODEuMiA2MDhDNTk2IDYwOCA2MDggNTk2IDYwOCA1ODEuMkM2MDggNTc3LjggNjA3LjMgNTc0LjQgNjA2LjEgNTcxLjJMNTc2LjQgNDk2LjhDNTk2LjQgNDY5IDYwOC4xIDQzNS43IDYwOC4xIDQwMEM2MDguMSAzMTcuNiA1NDYuNCAyNDguNSA0NjMuMSAyMjkuM0M0NjEuNSAyNDUuNiA0NTggMjYxLjIgNDUzIDI3Ni4yQzUxNi45IDI5MSA1NjAuMiAzNDMuNSA1NjAuMiA0MDAuMUM1NjAuMiA0MjUuMiA1NTIuMSA0NDguOCA1MzcuNiA0NjguOUM1MjggNDgyLjIgNTI1LjkgNDk5LjUgNTMyIDUxNC44TDU0My40IDU0My4zTDQ5MyA1MjMuMUM0ODMgNTE5LjEgNDcxLjkgNTE4LjYgNDYxLjYgNTIxLjZDNDQ3LjQgNTI1LjggNDMyLjIgNTI4LjEgNDE2LjMgNTI4LjFDMzQ0LjEgNTI4LjEgMjg5LjIgNDgyLjQgMjc1LjYgNDI2LjlDMjYwIDQzMC4xIDI0My45IDQzMS45IDIyNy41IDQzMi4xQzI0My45IDUxNCAzMjIuMiA1NzYuMSA0MTYuMyA1NzYuMXoiLz48L3N2Zz4=';
            questionIcon.style.width = '1.25em';
            questionIcon.style.height = '1.25em';
            questionButton.className = `${CLASS_BUTTON_SECONDARY} ${CLASS_BUTTON_SMALL}`;
            questionButton.appendChild(questionIcon);

            tippy(questionButton, {
                content: item.questions
            });

            questionTitle.style.display = 'flex';
            questionTitle.style.flexDirection = 'row';
            questionTitle.style.justifyContent = 'space-between';

            questionTitle.appendChild(questionButton);
        }
    }

    /**
     * Set the question echelle tooltips for the selected level
     * @param item
     */
    function setEchelle (item) {
        const responses = item.element.parentElement.parentElement.parentElement.querySelectorAll(SELECTOR_ECHELLE_BUTTON);

        responses.forEach((response, idx) => {
            const isLegendAvailable = ['rookie', 'advanced', 'senior', 'team leader', 'business leader', 'generic'].includes(level) && item.legends[level].length > 0;
            upsertTooltip(response, isLegendAvailable ? item.legends[level][idx] : 'Non précisé');
        })
    }

    /**
     * Update tooltip
     * @param el
     * @param text
     */
    function upsertTooltip(el, text) {
        if(el._tippy) {
            // Directly update existing tippy instance (to avoid multiple tooltips
            el._tippy.setContent(text);
        } else {
            tippy(el, { content: text });
        }
    }

    /**
     * Add a fullscreen button to the aside
     */
    function addFullscreenButton() {
        if(!document.querySelector(`.${CLASS_FULLSCREEN_BUTTON}`)) {
            const fullscreenButton = document.createElement('button');
            fullscreenButton.innerText = '[ ]';
            fullscreenButton.type = 'button';
            fullscreenButton.className = `${CLASS_FULLSCREEN_BUTTON} ${CLASS_BUTTON_PRIMARY} ${CLASS_BUTTON_SMALL}`;
            fullscreenButton.addEventListener('click', onClickFullscreen);

            document.querySelector(SELECTOR_FULLSCREEN_BUTTON_WRAPPER).appendChild(fullscreenButton);
        }
    }

    /**
     * Toggle the fullscreen mode
     */
    function onClickFullscreen()  {
        const aside = document.querySelector(SELECTOR_SIDEBAR)

        if(aside.classList.contains(CLASS_FULLSCREEN)) {
            aside.classList.remove(CLASS_FULLSCREEN);
        } else {
            aside.classList.add(CLASS_FULLSCREEN);
        }
    }

    // -------------------------------------------

    function isOnInterviewPage() {
        return document.querySelector(SELECTOR_TITLE)?.innerText.includes(INTERVIEW_FORM_NAME);
    }

    function getLevel() {
        return document.querySelector(SELECTOR_CHECKED_LEVEL)?.parentElement?.innerText?.toLowerCase() ?? 'generic';
    }

    function hasDescriptionTags() {
        return Array.from(document.querySelectorAll(SELECTOR_QUESTION_DETAIL))
            .some(el => el.innerText.includes(`[${DESCRIPTION_TAG}]`));
    }

    function extract (input, tag) {
        const regex = new RegExp(`\\[${tag}\\]([\\s\\S]*?)\\[\\/${tag}\\]`);
        const match = input.match(regex);
        return match ? match[1].trim() : "";
    }

    function parseEchelle (input, tag){
        const content = extract(input, tag);
        if (!content) return [];
        return content
            .split(/\s*\d+\s*-\s*/g)
            .filter(Boolean)
            .map(str => str.trim());
    }

    // -------------------------------------------

    function observeModal(modal) {
        const modalObserver = new MutationObserver(update);

        modalObserver.observe(modal, {
            childList: true,
            subtree: true
        });
    }


    const observer = new MutationObserver((mutations, obs) => {
        const modal = document.querySelector(SELECTOR_SIDEBAR);

        if (modal) {
            observeModal(modal);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
