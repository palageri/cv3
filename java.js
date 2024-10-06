const cvData = {
    experience: [
        { jobTitle: "Frontend Fejlesztő", company: "XYZ Kft.", years: "2020 - 2023" },
        { jobTitle: "Webfejlesztő Gyakornok", company: "ABC Zrt.", years: "2019 - 2020" }
    ],
    education: [
        { degree: "BSc Informatika", institution: "Budapesti Műszaki Egyetem", years: "2016 - 2020" },
        { degree: "Érettségi", institution: "Budapesti Gimnázium", years: "2012 - 2016" }
    ],
    contact: "janos.kiss@example.com"
};

// Betölti a tapasztalatokat
if (document.getElementById("experience-list")) {
    const experienceList = document.getElementById("experience-list");
    cvData.experience.forEach(exp => {
        const li = document.createElement("li");
        li.innerText = `${exp.jobTitle} - ${exp.company} (${exp.years})`;
        experienceList.appendChild(li);
    });
}

// Betölti az oktatási adatokat
if (document.getElementById("education-list")) {
    const educationList = document.getElementById("education-list");
    cvData.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerText = `${edu.degree} - ${edu.institution} (${edu.years})`;
        educationList.appendChild(li);
    });
}

// Betölti a kapcsolatot
if (document.getElementById("email")) {
    document.getElementById("email").innerText = cvData.contact;
}


