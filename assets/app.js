// Handle form submission and generate resume
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var outputSection = document.getElementById("resumeOutput");
    var outputContent = document.getElementById("resumeContent");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); }),
        };
        outputContent.innerHTML = "\n            <h1>".concat(formData.name, "</h1>\n            <p>Email: ").concat(formData.email, "</p>\n            <h3>Education</h3>\n            <p>").concat(formData.education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(formData.experience, "</p>\n            <h3>Skills</h3>\n            <ul>\n                ").concat(formData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n            </ul>\n        ");
        outputSection.style.display = "block";
    });
});
