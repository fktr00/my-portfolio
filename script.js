document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
       .then(response => response.json())
       .then(data => {
            const projectsContainer = document.getElementById("project-list");
            projectsContainer.innerHTML = ""; // Clear existing content

            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "col-md-4 mb-4"; // Added Bootstrap classes for styling

                projectCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h3 class="card-title">${project.title}</h3>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
       .catch(error => console.error("Error loading projects:", error));
});
