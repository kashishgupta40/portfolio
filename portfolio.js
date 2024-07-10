document.addEventListener("DOMContentLoaded", function(){
    // Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^= "#"]');
scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -70; //Adjudt the offset according to your navbar height
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behaviour: 'smooth'});
    });
});

//Display current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelectorAll('.footer-year');
footerYear.textContent = currentYear;

//Fetch projects from an API and display them dynamically
const projectGrid = document.querySelector('.project-grid');
fetch('https://api.example.com/projects')
.then(response => response.json())
.then(data => {
    data.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href = "${project.url}" target = "_blank" class ="btn">View Projects</a>
        `;
        projectGrid.appendChild(projectCard);
    });
})
  .catch(error => {
    console.error('Error fetching projects: ' , error);
  });
});
