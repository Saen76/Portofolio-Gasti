// =================================
// 1. DARK MODE / LIGHT MODE
// =================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀ Light Mode";
    }

});


// =================================
// 2. FILTER PROJECT
// =================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        projectItems.forEach(function (project) {

            const category = project.dataset.category;

            if (filter === "all" || filter === category) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }

        });

        // Mengubah tombol aktif
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// =================================
// 3. MODAL DETAIL PROJECT
// =================================

const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.dataset.title;
        const description = button.dataset.description;

        document.getElementById("modalTitle").textContent = title;

        document.getElementById("modalDescription").textContent =
            description;

        const modalElement = document.getElementById("projectModal");

        const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

        modal.show();

    });

});


// =================================
// 4. CONTACT FORM VALIDATION
// =================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("formResult");

    if (name === "" || email === "" || message === "") {

        result.innerHTML = `
            <div class="alert alert-danger">
                Semua kolom wajib diisi!
            </div>
        `;

        return;

    }

    result.innerHTML = `
        <div class="alert alert-success">
            Halo ${name}, formulir berhasil divalidasi!
        </div>
    `;

    contactForm.reset();

});


// =================================
// 5. BACK TO TOP
// =================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
