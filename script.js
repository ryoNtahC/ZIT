function goHome() {
  window.location.href = "index.html";
}

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const themes = {
  dark: {
    bg: "#0a0a0a",
    text1: "#ef4444",
    text2: "#b91c1c",
    text3: "#7f0f0f",
    main1: "#ef4444",
    main2: "#b91c1c",
    main3: "#7f0f0f",
    navBg: "#111",
    navText: "#ccc",
    modalBg: "#111",
    skillBarBg: "rgba(255, 255, 255, 0.1)",
    timelineLine: "#b91c1c",
    icon: "images/dark-mode-moon.png"
  },
  light: {
    bg: "#fdf6e3",
    text1: "#3b82f6",
    text2: "#2563eb",
    text3: "#1d4ed8",
    main1: "#3b82f6",
    main2: "#2563eb",
    main3: "#1d4ed8",
    navBg: "#f3e8d1",
    navText: "#111",
    modalBg: "#fdf6e3",
    skillBarBg: "rgba(59, 130, 246, 0.15)",
    timelineLine: "#3b82f6",
    icon: "images/light-mode-sun.png"
  }
};

function setTheme(mode) {
  const theme = themes[mode];
  document.documentElement.style.setProperty("--bg-color", theme.bg);
  document.documentElement.style.setProperty("--text1", theme.text1);
  document.documentElement.style.setProperty("--text2", theme.text2);
  document.documentElement.style.setProperty("--text3", theme.text3);
  document.documentElement.style.setProperty("--main1", theme.main1);
  document.documentElement.style.setProperty("--main2", theme.main2);
  document.documentElement.style.setProperty("--main3", theme.main3);
  document.documentElement.style.setProperty("--nav-bg", theme.navBg);
  document.documentElement.style.setProperty("--nav-text", theme.navText);
  document.documentElement.style.setProperty("--modal-bg", theme.modalBg);
  document.documentElement.style.setProperty("--skill-bar-bg", theme.skillBarBg);
  document.documentElement.style.setProperty("--timeline-line", theme.timelineLine);
  themeIcon.src = theme.icon;
  const themeData = {theme: mode};
  Object.keys(themeData).forEach(key => {
    sessionStorage.setItem(key, themeData[key]);
  });
}

themeToggle.addEventListener("click", () => {
  const current = sessionStorage.getItem("theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = sessionStorage.getItem("theme") || "dark";
  setTheme(saved);
});

const projects = [
  {
    name: "Nastavení prostředí, základy C",
    desc: "Úloha 1. spočíva v nastavení C vývojového prostredia a vytvorení programu, ktorý optimálne rozmení zadanú čiastku na najmenší počet českých bankoviek.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha1",
    category: "programovanie"
  },
  {
    name: "Cykly a podmínky",
    desc: "Úloha 2. spočíva vo vytvorení programu v jazyku C, ktorý pomocou podmienok a cyklov vykresľuje rôzne geometrické tvary podľa zadaných parametrov.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha2",
    category: "programovanie"
  },
  {
    name: "Funkce",
    desc: "Úloha 3. je zameraná na rozdelenie kódu do funkcií a vytváranie grafických útvarov a animácií v termináli pomocou ANSI sekvencií.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha3",
    category: "programovanie"
  },
  {
    name: "Ukazatele",
    desc: "Úloha 4. sa zameriava na prácu s pamäťou a poľami v C vytvorením programu, ktorý načíta čísla zo vstupu a zobrazí ich frekvencie vo forme horizontálneho alebo vertikálneho histogramu.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha4",
    category: "programovanie"
  },
  {
    name: "Dynamická alokace paměti",
    desc: "Úloha 5. sa zameriava na dynamickú alokáciu pamäti a prácu s 2D poľami v C vytvorením interaktívneho programu, v ktorom želvičky kreslia na plátno, pohybujú sa, otáčajú a medzi sebou sa množia v spoločnom priestore.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha5",
    category: "programovanie"
  },
  {
    name: "Práce s textem",
    desc: "Úloha 6. sa zameriava na spracovanie textu v jazyku C vytvorením programu, ktorý načítava riadky, normalizuje slová podľa daných pravidiel a generuje štatistiku o zmenách v počte znakov.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha6",
    category: "programovanie"
  },
  {
    name: "Struktury",
    desc: "Úloha 7. sa zameriava na prácu so štruktúrami v C vytvorením programu, ktorý načítava záznamy o akciách, hľadá najvyšší obchodný objem a generuje prehľadnú HTML stránku s výsledkami",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha7",
    category: "programovanie"
  },
  {
    name: "Textová práce se soubory",
    desc: "Úloha 8. sa zameriava na prácu so súbormi a parametrami príkazového riadku v C vytvorením jednoduchej verzie programu grep, ktorý vyhľadáva text v súbore s podporou voliteľných prepínačov.",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha8",
    category: "programovanie"
  },
  {
    name: "Binární práce se soubory a TGA",
    desc: "Úloha 9. sa zameriava na vytvorenie programu v jazyku C, ktorý načíta TGA obrázok a sadu písmen z fontu, vykreslí do obrázku zadané riadky textu v hornej a dolnej časti a uloží výsledné TGA",
    image: "images/code.jpg",
    github: "https://github.com/ryoNtahC/UPR/tree/main/uloha9",
    category: "programovanie"
  },
  {
    name: "Portfólio",
    desc: "Úlohou je vytvoriť portfólio obsahujúce životopis a projekty, ktoré sme tento semester vytvorili pomocou HTML, CSS a JavaScriptu.",
    image: "images/ZIT2.png",
    github: "https://github.com/yourusername/sietovy-projekt",
    category: "zit"
  },
];

const projectGrid = document.getElementById("projectGrid");
if (projectGrid) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const githubBtn = document.getElementById("githubBtn");
  const closeModalBtn = document.getElementById("closeModal");
  const filterBtns = document.querySelectorAll(".filter-btn");

  projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "project-card show";
    card.setAttribute("data-category", proj.category);
    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.name}" class="project-card-image">
      <div class="project-card-title">${proj.name}</div>
    `;
    card.addEventListener("click", () => openModal(index));
    projectGrid.appendChild(card);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const cards = document.querySelectorAll(".project-card");
      cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    });
  });

  function openModal(index) {
    const project = projects[index];
    modalTitle.textContent = project.name;
    modalDesc.textContent = project.desc;
    githubBtn.href = project.github;
    modal.style.display = "flex";
  }

  function closeModal() { 
    modal.style.display = "none"; 
  }
  
  closeModalBtn.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => { 
    if(e.key === "Escape") closeModal(); 
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateName(name) {
  return name.trim().length >= 2;
}

function validateSubject(subject) {
  return subject.trim().length >= 3;
}

function validateMessage(message) {
  return message.trim().length >= 10;
}

function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  
  if (input && error) {
    input.classList.add('error');
    input.classList.remove('success');
    error.textContent = message;
  }
}

function showSuccess(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  
  if (input && error) {
    input.classList.add('success');
    input.classList.remove('error');
    error.textContent = '';
  }
}

function clearErrors() {
  const inputs = ['contactName', 'contactEmail', 'contactSubject', 'contactMessage'];
  const errors = ['nameError', 'emailError', 'subjectError', 'messageError'];
  
  inputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.classList.remove('error', 'success');
    }
  });
  
  errors.forEach(id => {
    const error = document.getElementById(id);
    if (error) {
      error.textContent = '';
    }
  });
}

window.sendMessage = function() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  const messageDiv = document.getElementById('formMessage');

  clearErrors();
  
  let hasError = false;

  if (!validateName(name)) {
    showError('contactName', 'nameError', 'Meno musí obsahovac aspoň 2 znaky');
    hasError = true;
  } else {
    showSuccess('contactName', 'nameError');
  }

  if (!email) {
    showError('contactEmail', 'emailError', 'Email je povinný');
    hasError = true;
  } else if (!validateEmail(email)) {
    showError('contactEmail', 'emailError', 'Zadaj platný email (napr. meno@priklad.com)');
    hasError = true;
  } else {
    showSuccess('contactEmail', 'emailError');
  }

  if (!validateSubject(subject)) {
    showError('contactSubject', 'subjectError', 'Predmet musí obsahovac aspoň 3 znaky');
    hasError = true;
  } else {
    showSuccess('contactSubject', 'subjectError');
  }

  if (!validateMessage(message)) {
    showError('contactMessage', 'messageError', 'Správa musí obsahovac aspoň 10 znakov');
    hasError = true;
  } else {
    showSuccess('contactMessage', 'messageError');
  }

  if (hasError) {
    messageDiv.textContent = 'Prosím oprav chyby vo formulári';
    messageDiv.className = 'form-message error';
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
    
    return;
  }

  messageDiv.textContent = 'Správa bola úspešne odoslaná!';
  messageDiv.className = 'form-message success';
  messageDiv.style.display = 'block';

  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';
  
  clearErrors();

  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
};