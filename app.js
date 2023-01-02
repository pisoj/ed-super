function getGrades() {
    const grades = document.getElementsByClassName("grade");
    let gradeList = [];
    for(let i = 0; i < grades.length; i++) {
        const gradeNumbers = grades[i].children; for(let j = 0; j < gradeNumbers.length; j++) {
            const gradeFianl = gradeNumbers[j].children;
            for(let k = 0; k < gradeFianl.length; k++) {
                const grade = gradeFianl[k];
                gradeList.push(parseInt(grade.innerHTML))
            }
        }
    };
    return gradeList
};

function calculateAverage(numbers) {
    let sum = 0;
    let count = 0;
    for(; count < numbers.length; count++) {
        sum += numbers[count]
    };
    return parseFloat(sum) / parseFloat(count)
};

function addAverage(average) {
    const color = (average - 1) * 30;

    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    const text = document.createTextNode(`
    .grades-average {
        background: hsl(${color}, 71%, 90%);
    }
    .table-end {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    `);
    style.appendChild(text);
    head.appendChild(style);

    const gradesTable = document.getElementsByClassName("grades-table")[0];
    const row = document.createElement("div");
    const rowClasses = ["flex-table", "row", "grades-average", "table-end"];
    for(let i = 0; i < rowClasses.length; i++) {
        row.classList.add(rowClasses[i]);
    };

    const titleColumn = document.createElement("div");
    titleColumn.classList.add("flex-row");
    titleColumn.classList.add("first");
    const titleColumnText = document.createTextNode("Prosjek ocjena");
    titleColumn.appendChild(titleColumnText);

    const valueColumn = document.createElement("div");
    valueColumn.classList.add("flex-row");
    valueColumn.classList.add("head");
    const valueColumnText = document.createTextNode(String(average.toFixed(2)));
    valueColumn.appendChild(valueColumnText);

    row.appendChild(titleColumn);
    row.appendChild(valueColumn);

    gradesTable.appendChild(row);
};

if(window.location.pathname.includes("grade")) {
    const grades = getGrades();
    const average = calculateAverage(grades);

    addAverage(average);
};

function customCss() {
    const head = document.getElementsByTagName("head")[0];

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "https://pisoj.github.io/ed-super/style.css")
    head.appendChild(style);
}

function customLogo() {
    const logoContainer = document.getElementsByClassName("logo")[0];

    const superLogoClasses = ["logo-link", "logo-extension", "rainbow"];
    const superLogo = document.createElement("a");
    for(let i = 0; i < superLogoClasses.length; i++) {
        superLogo.classList.add(superLogoClasses[i]);
    };
    superLogo.setAttribute("href", "/");
    const superLogoText = document.createTextNode("SUPER");

    superLogo.appendChild(superLogoText);
    logoContainer.appendChild(superLogo);
};

customCss();
customLogo();