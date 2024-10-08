const cvData = {
    experience: [
        { jobTitle: "CEO", company: "EcoBoostHouse Kft.", years: "2022 - 2024" },
        { jobTitle: "Projektfelelős", company:"CoolingBuda Kft.", years: "2020-2021"}, 
        { jobTitle: "Elemző mérnök gyakornok", company: "MVM Zrt.", years: "2017 - 2019" }
    ],
    education: [
        { degree: "Energetikai Mérnök", institution: "Budapesti Műszaki Egyetem", years: "2012 - 2016" },
        { degree: "Érettségi", institution: "Kazinczy Ferenc Gimnázium", years: "2008 - 2012" }
    ],
    contact: "palasicsgergo@ecoboosthouse.hu",
   


    skills: [
        "klímaberendezések beszerelése",
        "hőszivattyús rendszerek telepítése",
        "napelemek telepítése",
        "okosotthon rendszerek kialakítása",
        "elektromos hálózat fejlesztés",
        "szellőztetési rendszerek tervezése",
        "levegőtisztító rendszerek telepítése"
    ]
};


if (document.getElementById("experience-list")) {
    const experienceList = document.getElementById("experience-list");
    cvData.experience.forEach(exp => {
        const li = document.createElement("li");
        li.innerText = `${exp.jobTitle} - ${exp.company} (${exp.years})`;
        experienceList.appendChild(li);
    });
}


if (document.getElementById("education-list")) {
    const educationList = document.getElementById("education-list");
    cvData.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerText = `${edu.degree} - ${edu.institution} (${edu.years})`;
        educationList.appendChild(li);
    });
}


if (document.getElementById("email")) {
    document.getElementById("email").innerText = cvData.contact;
}


if (document.getElementById("skills-list")) {
    const skillsList = document.getElementById("skills-list");
    cvData.skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerText = skill;
        skillsList.appendChild(li);
    });
}
