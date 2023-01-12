export abstract class Average {
    static calculate(numbers: number[]) {
        const sum = numbers.reduce((partialSum, x) => partialSum + x, 0);
        return sum / numbers.length;
    }

    static format(average: number) {
        return average.toFixed(2);
    }

    static formatInt(average: number) {
        return Math.round(average);
    }
 
    static color(average: number) {
        const color = (average - 1) * 30;
        return `hsl(${color}, 71%, 90%)`;
    }

    static colored(element: Element, average: number) {
        element.setAttribute("style", `background: ${Average.color(average)};`);
    }

    protected showAverage(grades: number[], gradesTable: Element, extraDivs = 0) {
        const average = Average.calculate(grades);
        
        const row = document.createElement("div");
        const rowClasses = ["flex-table", "row", "table-end"];
        for(let i = 0; i < rowClasses.length; i++) {
            row.classList.add(rowClasses[i]);
        };
        Average.colored(row, average);
    
        for(let i = 0; i < extraDivs; i++) {
            const column = document.createElement("div");
            column.classList.add("flex-row");
            row.appendChild(column);
        };
    
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
        const valueColumnText = document.createTextNode(Average.format(average));
        valueColumn.appendChild(valueColumnText);
    
        row.appendChild(titleColumn);
        row.appendChild(valueColumn);
    
        gradesTable.appendChild(row);
    }

    abstract show(): void
}


class SubjectAverage extends Average {
    private getGrades() {
        const grades = document.getElementsByClassName("grade");
        const gradeList: number[] = [];
        for(let i = 0; i < grades.length; i++) {
            const gradeNumbers = grades[i].children;
            for(let j = 0; j < gradeNumbers.length; j++) {
                const gradeFianl = gradeNumbers[j].children;
                for(let k = 0; k < gradeFianl.length; k++) {
                    const grade = gradeFianl[k];
                    gradeList.push(parseInt(grade.innerHTML));
                }
            }
        }
        return gradeList
    }

    show() {
        const gradesTable = document.getElementsByClassName("grades-table")[0];
        const grades = this.getGrades();
        super.showAverage(grades, gradesTable);
    }
}


class AllSubjectsAverage extends Average {
    private getSubjects() {
        return document.querySelectorAll(".new-grades-table");
    }

    private getNotes(subject: Element) {
        return subject.querySelectorAll(".row");
    }
    
    private getGrade(note: Element) {
        const gradeContainer = note.querySelectorAll("div")[3];
        if(gradeContainer.children.length > 0) {
            return parseInt(gradeContainer.querySelector("span")!.innerHTML);
        } else {
            return null;
        }
    }
    
    private getGrades(subject: Element) {
        const notes = this.getNotes(subject);
        const gradeList: number[] = [];
        for(let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const grade = this.getGrade(note);
            if(grade != null) {
                gradeList.push(grade);
            }
        }
        return gradeList;
    }
    
    private calculateSubjectAverage(subject: Element) {
        const gradeList = this.getGrades(subject);
        if(gradeList.length === 0) return null;
        super.showAverage(gradeList, subject, 2);
        return Average.calculate(gradeList);
    }

    private calculateOverallSuccess(menu: Element, title: Element, button: HTMLElement, finalGrades: number[]) {
        const overallSuccess = Average.calculate(finalGrades);
        const color = Average.color(overallSuccess);

        Average.colored(menu, overallSuccess);
        title.classList.add("black");
        button.onclick = null;
        button.textContent = Average.format(overallSuccess);
    }

    // TODO: What if class is finished?

    private showOverallSuccess(finalGrades: number[]) {
        const menu = document.querySelector(".dropdown-menu-wrapper");
        menu.classList.remove("js-dropdown-menu");
        menu.querySelector(".dropdown-content").remove();
        menu.querySelector(".icon-angle-down").remove();
        
        const title = menu.querySelector(".dropdown-title span");
        title.textContent = "OPĆI USPJEH:";

        const button = document.createElement("span");
        button.textContent = "Izračunaj";
        button.onclick = () => {
            this.calculateOverallSuccess(menu, title, button, finalGrades);
        };
        menu.appendChild(button);
    }
    
    show() {
        const finalGrades: number[] = [];
        const subjects = this.getSubjects();
        for(let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const subjectAverage = this.calculateSubjectAverage(subject);
            if(subjectAverage === null) continue;
            finalGrades.push(Average.formatInt(subjectAverage));
        }
        this.showOverallSuccess(finalGrades);
    }
}

function removeLogo() {
    const logoContainer = document.getElementsByClassName("logo")[0];
    logoContainer.innerHTML = "";
    return logoContainer;
}

function customLogo() {
    const logoContainer = removeLogo();

    const superLogo = document.createElement("a");
    superLogo.classList.add("logo-link");
    superLogo.setAttribute("href", "/");

    const superLogoImg = document.createElement("img");
    superLogoImg.classList.add("logo-img");
    superLogoImg.setAttribute("src", "https://pisoj.github.io/ed-super/img/logo-256.webp");
    superLogoImg.setAttribute("alt", "eD Super");

    superLogo.appendChild(superLogoImg);
    logoContainer.appendChild(superLogo);
}

function demoLogin() {
    const loginForm = document.querySelector(".form-login") as HTMLElement;
    loginForm.onsubmit = (event) => {
        const username = loginForm.querySelector('input[name="username"]') as HTMLInputElement;
        if(username.value != "super") return;
        const password = loginForm.querySelector('input[name="password"]') as HTMLInputElement;
        if(password.value != "man") return;
        event.preventDefault();
        alert("Ovo je testno okruženje! Upozoravamo da neke funkcije možda neće raditi.");
        location.replace("https://pisoj.github.io/ed-super/demo/class.html");
    };
}


function choseFeature() {
    if(location.pathname.indexOf("login") !== -1) {
        demoLogin();
        removeLogo();
        return;
    }

    if(location.pathname.indexOf("grade") !== -1 && location.pathname.indexOf("all") !== -1) {
        const allSubjectsAverage = new AllSubjectsAverage;
        allSubjectsAverage.show();
        return;
    }

    if(location.pathname.indexOf("grade") !== -1) {
        const subjectAverage = new SubjectAverage;
        subjectAverage.show();
        return;
    }
}

if(typeof document !== 'undefined') {
    customLogo();
    choseFeature();
}
