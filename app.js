const actions = Array.from(
    document.querySelectorAll('[data-action]')
);

let score = localStorage.getItem('score') || 0;

document.querySelector(".value").innerText = score;

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;
        console.log(type);
        switch (type) {
            case 'one':
                score++;
                alert("eh, do better next time");
                break;
            case 'two':
                score++;
                score++;
                alert("GOOD JOB KEEP IT FUCKEN UP!!!");
                break;
            case 'zero':
                alert("srsly...? anyway ur score was "+score);
                score=0;
                break;
            case 'save':
                localStorage.setItem('score', score);
                alert('score have been saved!');
                break;
            case 'load':
                score= localStorage.getItem('score');
                break;
            case 'clear':
                let c = confirm("are you sure you want to clear your progress?");
                if (c) {
                    localStorage.clear();
                    score = 0;
                }
                break;
        }

        document.querySelector(".value").innerText = score;

    });
});

const theme = document.querySelector('link');

const themeA = Array.from(
    document.querySelectorAll('[data-theme]')
);

themeA.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.theme;
        console.log(type);
        switch (type) {
            case 'dark':
                theme.href='dark.css'
                console.log(type);
                break;

            case 'blind':
                theme.href='main.css'
                console.log(type);
                break;
        }
        
    });
});