//Task 1: Dark / Light mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark");
  themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});

//Task 2: Show more / Show less
const toggleAboutBtn = document.getElementById("toggle-about");
const moreAbout = document.getElementById("more-about");

toggleAboutBtn.addEventListener("click", function () {
  const isHidden = moreAbout.classList.toggle("hidden");
  toggleAboutBtn.textContent = isHidden ? "Show More" : "Show Less";
});

//Task 3: Dynamic projects
const projects = [
  {
    title: "Interactive CV Website",
    description: "My personal CV website, made interactive with JavaScript and the DOM.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Campus Compass",
    description: "Java application for KAU students and employees to post lost or found belongings and retrieve them (CPIT305).",
    category: "Programming",
    technologies: ["Java"]
  },
  {
    title: "Strawberry cake and Doughnut",
    description: "Project for Computer Graphics course CPIT285 using Blender.",
    category: "Design",
    technologies: ["Blender"],
    link: "Projects/project285.png"
  },
  {
    title: "CarWash+",
    description: "Project for Human Computer Interaction course CPIT280.",
    category: "Design",
    technologies: ["UI/UX"],
    link: "Projects/CarWash+Presentation.pdf"
  },
  {
    title: "Code Blue System",
    description: "Project for System Analysis and Design course CPIT252. Idea and analysis only, no prototype.",
    category: "Design",
    technologies: ["System Analysis"]
  },
  {
    title: "Social Media Dangers: What are your kids sharing?",
    description: "Poster for Information Security course CPIT425.",
    category: "Design",
    technologies: ["Poster Design"],
    link: "Projects/cpit425Poster.pdf"
  }
];

const container = document.getElementById("projects-container");

function renderProjects(category) {
  // Clear old cards first so cards are never duplicated
  container.innerHTML = "";

  const list = category === "All"
    ? projects
    : projects.filter(function (p) { return p.category === category; });

  list.forEach(function (project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = project.category;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const tech = document.createElement("p");
    tech.textContent = "Technologies: " + project.technologies.join(", ");

    card.appendChild(title);
    card.appendChild(badge);
    card.appendChild(desc);
    card.appendChild(tech);
    if (project.link) {
      const a = document.createElement("a");
      a.href = project.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "View Project";
      card.appendChild(a);
    }

    container.appendChild(card);
  });
}

renderProjects("All"); // render on page load

//Task 4: Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    renderProjects(btn.dataset.category); // reuse the same function
  });
});

//Task 5: Print / Save as PDF 
document.getElementById("print-btn").addEventListener("click", function () {
  window.print();
});