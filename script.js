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
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title">${project.title}</h3>
                            <p class="card-text flex-grow-1 mb-4">${project.description}</p>
                            <div class="mt-auto">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" 
                                        data-title="${project.title}" data-description="${project.detailedDescription}" data-image="${project.image}">
                                    View Project
                                </button>
                            </div>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });

            // Handle modal display
            const modal = document.getElementById('projectModal');
            modal.addEventListener('show.bs.modal', function (event) {
                const button = event.relatedTarget; // Button that triggered the modal
                const title = button.getAttribute('data-title');
                const description = button.getAttribute('data-description');
                const image = button.getAttribute('data-image');

                const modalTitle = modal.querySelector('.modal-title');
                const modalDescription = modal.querySelector('#projectDescription');
                const modalImage = modal.querySelector('#projectImage');

                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalImage.src = image;
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});
