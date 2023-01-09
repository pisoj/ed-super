export abstract class Average {
    static calculate(numbers: number[]) {
        const sum = numbers.reduce((partialSum, x) => partialSum + x, 0);
        return sum / numbers.length;
    }

    static format(average: number) {
        return average.toFixed(2);
    }

    private color(average: number) {
        const color = (average - 1) * 30;
        return `hsl(${color}, 71%, 90%)`;
    }

    protected showAverage(grades: number[], gradesTable: Element, extraDivs = 0) {
        const average = Average.calculate(grades);
        
        const row = document.createElement("div");
        const rowClasses = ["flex-table", "row", "table-end"];
        for(let i = 0; i < rowClasses.length; i++) {
            row.classList.add(rowClasses[i]);
        };
        row.setAttribute("style", `background: ${this.color(average)};`);
    
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
        if(gradeList.length === 0) return;
        super.showAverage(gradeList, subject, 2);
    }
    
    show() {
        const subjects = this.getSubjects();
        for(let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            this.calculateSubjectAverage(subject);
        }
    }
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


function choseFeature() {
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
