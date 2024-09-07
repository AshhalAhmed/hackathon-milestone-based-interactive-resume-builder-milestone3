// Handle form submission and generate resume
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const outputSection = document.getElementById("resumeOutput") as HTMLDivElement;
    const outputContent = document.getElementById("resumeContent") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            education: (document.getElementById("education") as HTMLTextAreaElement).value,
            experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
            skills: (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim()),
        };

        outputContent.innerHTML = `
            <h1>${formData.name}</h1>
            <p>Email: ${formData.email}</p>
            <h3>Education</h3>
            <p>${formData.education}</p>
            <h3>Work Experience</h3>
            <p>${formData.experience}</p>
            <h3>Skills</h3>
            <ul>
                ${formData.skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
        `;

        outputSection.style.display = "block";
    });
});
