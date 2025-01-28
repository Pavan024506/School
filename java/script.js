// Data for subjects (class-wise)
const subjectsData = {
    10: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
    9: ["Mathematics", "Science", "English", "Social Studies"],
    8: ["Mathematics", "Science", "English"]
};

// Handle class selection
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevent default navigation
        const selectedClass = event.target.getAttribute('data-class');
        showSubjects(selectedClass);
    });
});

// Function to show subjects
function showSubjects(selectedClass) {
    const subjectsContainer = document.getElementById('subjects');

    // Clear previous subjects
    subjectsContainer.innerHTML = '';

    // Check if subjects exist for the selected class
    if (subjectsData[selectedClass]) {
        const subjectsList = subjectsData[selectedClass]
            .map(subject => `<li>${subject}</li>`)
            .join('');

        subjectsContainer.innerHTML = `
            <h3>Subjects for Class ${selectedClass}</h3>
            <ul>${subjectsList}</ul>
        `;
    } else {
        subjectsContainer.innerHTML = `<p>No subjects available for Class ${selectedClass}.</p>`;
    }
}
