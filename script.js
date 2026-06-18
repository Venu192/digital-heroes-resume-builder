
const inputs = document.querySelectorAll(
    "input, textarea"
);

inputs.forEach(input => {

    input.addEventListener("input", () => {

        localStorage.setItem(
            input.id,
            input.value
        );

    });

});



window.onload = () => {

    inputs.forEach(input => {

        const value =
            localStorage.getItem(input.id);

        if (value) {

            input.value = value;

        }

    });

    generateResume();

};



document.querySelectorAll(
    "input, textarea"
).forEach(field => {

    field.addEventListener(
        "input",
        generateResume
    );

});



function generateResume() {

    document.getElementById(
        "previewName"
    ).innerText =
        document.getElementById(
            "name"
        ).value || "Your Name";

    document.getElementById(
        "previewEmail"
    ).innerText =
        document.getElementById(
            "email"
        ).value || "Email";

    document.getElementById(
        "previewPhone"
    ).innerText =
        document.getElementById(
            "phone"
        ).value || "Phone";

    document.getElementById(
        "previewLinkedin"
    ).innerText =
        document.getElementById(
            "linkedin"
        ).value || "LinkedIn";

    document.getElementById(
        "previewSummary"
    ).innerText =
        document.getElementById(
            "summary"
        ).value;

    document.getElementById(
        "previewEducation"
    ).innerText =
        document.getElementById(
            "education"
        ).value;

    document.getElementById(
        "previewProjects"
    ).innerText =
        document.getElementById(
            "projects"
        ).value;

    document.getElementById(
        "previewCollege"
    ).innerText =
        document.getElementById(
            "college"
        ).value;

    document.getElementById(
        "previewCgpa"
    ).innerText =
        document.getElementById(
            "cgpa"
        ).value;

    document.getElementById(
        "previewCertifications"
    ).innerText =
        document.getElementById(
            "certifications"
        ).value;

  

    let skills =
        document.getElementById(
            "skills"
        ).value.split(",");

    let skillsContainer =
        document.getElementById(
            "previewSkills"
        );

    skillsContainer.innerHTML = "";

    skills.forEach(skill => {

        if (skill.trim()) {

            let tag =
                document.createElement(
                    "span"
                );

            tag.className =
                "skill-tag";

            tag.innerText =
                skill.trim();

            skillsContainer.appendChild(
                tag
            );

        }

    });

}



document
.getElementById("photo")
.addEventListener(
    "change",
    function () {

        const file =
            this.files[0];

        if (file) {

            const reader =
                new FileReader();

            reader.onload =
                function (e) {

                    document
                    .getElementById(
                        "previewPhoto"
                    ).src =
                    e.target.result;

                };

            reader.readAsDataURL(
                file
            );

        }

    }
);


function downloadPDF() {

    const resume =
        document.getElementById(
            "resume"
        );

    html2pdf()
        .set({

            margin: 0.5,

            filename:
            "DigitalHeroes_Resume.pdf",

            image: {
                type: "jpeg",
                quality: 1
            },

            html2canvas: {
                scale: 2
            },

            jsPDF: {
                unit: "in",
                format: "a4",
                orientation:
                "portrait"
            }

        })
        .from(resume)
        .save();

}



document
.getElementById(
    "darkModeBtn"
)
.addEventListener(
    "click",
    () => {

        document.body
        .classList.toggle(
            "dark-mode"
        );

        const btn =
            document.getElementById(
                "darkModeBtn"
            );

        if (
            document.body
            .classList.contains(
                "dark-mode"
            )
        ) {

            btn.innerHTML =
                "☀️ Light Mode";

        } else {

            btn.innerHTML =
                "🌙 Dark Mode";

        }

    }
);
