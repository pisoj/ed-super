interface Feature {
    show(): void
}

export abstract class Average implements Feature {
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
        const light = 81 + (average - 1) * 3.5;
        return `hsl(${color}, 71%, ${light}%)`;
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

    private makeSubjectCollapsible(subject: Element) {
        const summary = document.createElement("summary");
        summary.appendChild(subject.firstElementChild);
        summary.appendChild(subject.firstElementChild);

        const content = document.createElement("div");
        content.classList.add("content");

        while(subject.firstElementChild) {
            if(subject.firstElementChild.hasAttribute("style")) break;
            content.appendChild(subject.firstElementChild);
        }

        const details = document.createElement("details");
        details.appendChild(summary);
        details.appendChild(content);

        subject.prepend(details);
    }
    
    show() {
        const finalGrades: number[] = [];
        const subjects = this.getSubjects();
        for(let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const subjectAverage = this.calculateSubjectAverage(subject);
            if(subjectAverage === null) continue;
            finalGrades.push(Average.formatInt(subjectAverage));
            this.makeSubjectCollapsible(subject);
        }
        this.showOverallSuccess(finalGrades);
    }
}

class Login implements Feature {
    static login(username: string, password: string) {
        const loginForm = this.getLoginForm();
        this.getUsername(loginForm).value = username;
        this.getPassword(loginForm).value = password;
        loginForm.requestSubmit();
    }

    static handleAccountSaving() {
        // @ts-ignore
        const tmp = app.readTmp()
        if(tmp === "") return;
        const tmpSplit = tmp.split(";");
        const username = tmpSplit[0];
        const password = tmpSplit[1];
        const fullname = this.getFullName();

        // @ts-ignore
        app.addAccount(username, password, fullname);
        // @ts-ignore
        app.writeTmp("");
    }

    static getFullName() {
        return document.querySelector(".user-name").children[0].textContent;
    }

    static getLoginForm() {
        return document.querySelector<HTMLFormElement>(".form-login");
    }

    static getUsername(loginForm: HTMLElement) {
        return loginForm.querySelector<HTMLInputElement>('input[name="username"]');
    }

    static getPassword(loginForm: HTMLElement) {
        return loginForm.querySelector<HTMLInputElement>('input[name="password"]');
    }

    static getRememberMe(loginForm: HTMLElement) {
        return loginForm.querySelector<HTMLInputElement>('#remember-me');
    }

    static getSubmit(loginForm: HTMLElement) {
        return loginForm.querySelector<HTMLInputElement>('input[type="submit"]');
    }

    private onLogin(loginForm: HTMLElement) {
        loginForm.onsubmit = (event) => {
            this.demoLogin(loginForm, event);
            this.handleRememberMe(loginForm);
        }
    }

    private demoLogin(loginForm: HTMLElement, event: SubmitEvent) {
        const username = Login.getUsername(loginForm);
        if(username.value !== "super") return;
        const password = Login.getPassword(loginForm);
        if(password.value !== "man") return;
        event.preventDefault();
        alert("Ovo je testno okruženje! Upozoravamo da neke funkcije možda neće raditi.");
        location.replace("https://pisoj.github.io/ed-super/demo/class.html");
    }

    private handleRememberMe(loginForm: HTMLElement) {
        if(!Login.getRememberMe(loginForm).checked) return;
            // @ts-ignore
            app.writeTmp(`${Login.getUsername(loginForm).value};${Login.getPassword(loginForm).value}`);
    }

    private addRememberMe(loginForm: HTMLElement) {
        const container = document.createElement("div");
        container.classList.add("line");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "remember-me");
        checkbox.checked = true;

        const label = document.createElement("label");
        label.setAttribute("for", "remember-me");
        label.textContent = "Zapamti me";

        container.appendChild(checkbox);
        container.appendChild(label);
        
        Login.getSubmit(loginForm).before(container);

        this.handleRememberMe(loginForm);
    }


    private addUsernameExtension(loginForm: HTMLElement) {
        const username = Login.getUsername(loginForm);
        document.querySelector(".login-header").remove();

        const usernameField = document.createElement("div");
        usernameField.classList.add("input-extension");
        usernameField.appendChild(username.cloneNode(true));

        const usernameExtension = document.createElement("span");
        usernameExtension.textContent = "@skole.hr";
        usernameField.appendChild(usernameExtension);

        username.replaceWith(usernameField);
    }

    show() {
        const loginForm = Login.getLoginForm();
        this.onLogin(loginForm);
        this.addRememberMe(loginForm);
        // @ts-ignore
        if(typeof app !== "undefined") {
            // @ts-ignore
            window.Login = Login;
            // @ts-ignore
            app.selectAccount();
        }
        this.addUsernameExtension(loginForm);
    }
}


function choseFeature() {
    if(location.pathname.indexOf("login") !== -1) {
        const login = new Login;
        login.show();
        return;
    }

    customLogo();

    if(location.pathname.indexOf("class") !== -1) {
        Login.handleAccountSaving();
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
}

if(typeof document !== 'undefined') {
    choseFeature();
}
