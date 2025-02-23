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
                            <div class="d-flex justify-content-between align-items-end">
                                <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                                <button class="btn btn-secondary" onclick="showMoreDetails('${project.detailedDescription}')">More Detailed</button>
                            </div>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
      .catch(error => console.error("Error loading projects:", error));
});

function showMoreDetails(description) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.style.width = "50%";
    modalContent.style.height = "50%";
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.overflowY = "auto";

    const closeButton = document.createElement("button");
    closeButton.className = "btn btn-close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.onclick = function() {
        modal.remove();
    };

    modalContent.innerHTML = description;
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
