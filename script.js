document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById("projects-container");
            projectsContainer.innerHTML = ""; // Clear existing content

            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "project-card";

                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});
