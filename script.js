// Data for the projects section
const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        image: "https://via.placeholder.com/300",
        link: "https://www.example.com"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        image: "https://via.placeholder.com/300",
        link: "https://www.example.com"
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        image: "https://via.placeholder.com/300",
        link: "https://www.example.com"
    }
];

// Function to generate the project cards
function generateProjectCards() {
    const projectGrid = document.querySelector(".project-grid");
    projectGrid.innerHTML = "";
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Function to generate the skills list
function generateSkillsList() {
    const skillsList = document.querySelector(".skills ul");
    skillsList.innerHTML = "";
    const skills = [
        "Microsoft Excel",
        "Power BI",
        "Jupyter Notebook",
        "Kaggle",
        "Python",
        "R",
        "SQL"
    ];
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

// Generate the project cards and skills list
generateProjectCards();
generateSkillsList();
