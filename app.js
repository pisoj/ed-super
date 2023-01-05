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

    const gradesTable = document.getElementsByClassName("grades-table")[0];
    const row = document.createElement("div");
    const rowClasses = ["flex-table", "row", "grades-average", "table-end"];
    for(let i = 0; i < rowClasses.length; i++) {
        row.classList.add(rowClasses[i]);
    };
    row.setAttribute("style", `background: hsl(${color}, 71%, 90%);`);

    const titleColumn = document.createElement("div");
    titleColumn.classList.add("flex-row");
    titleColumn.classList.add("first");
    const titleColumnText = document.createTextNode("Prosjek ocjena");
    titleColumn.appendChild(titleColumnText);

    const valueColumn = document.createElement("div");
    const valueColumnClasses = ["flex-row", "head", "table-end"];
    for(let i = 0; i < valueColumnClasses.length; i++) {
        valueColumn.classList.add(valueColumnClasses[i]);
    };
    const valueColumnText = document.createTextNode(String(average.toFixed(2)));
    valueColumn.appendChild(valueColumnText);

    row.appendChild(titleColumn);
    row.appendChild(valueColumn);

    gradesTable.appendChild(row);
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
    logoContainer.innerHTML = "";

    const superLogo = document.createElement("a");
    superLogo.classList.add("logo-link");
    superLogo.setAttribute("href", "/");

    const superLogoImg = document.createElement("img");
    superLogoImg.classList.add("logo-img");
    superLogoImg.setAttribute("src", "https://pisoj.github.io/ed-super/img/logo-256.webp");
    superLogoImg.setAttribute("alt", "eD Super");

    superLogo.appendChild(superLogoImg);
    logoContainer.appendChild(superLogo);
};


if(window.location.pathname.includes("grade")) {
    const grades = getGrades();
    const average = calculateAverage(grades);
    
    addAverage(average);
};
    
customCss();
customLogo();