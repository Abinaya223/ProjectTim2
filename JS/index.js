document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");

  if (!container) return;
  const currentPage = window.location.pathname.split("/").pop() || "landingPage.html";

  const navItems = [
    { name: "Beranda", href: "landingPage.html" },
    { name: "Main Course", href: "mainCourse.html#menu-utama" },
    { name: "Drinks & dessert", href: "dessertDrink.html#drinks-dessert" },
    { name: "About Pecel", href: "about.html#about-pecel" },
    { name: "Story", href: "about.html#story-pecel" },
  ];

  const navLinksHTML = navItems
    .map((item) => {
      const isActive = currentPage === item.href;
      const activeClass = isActive ? "font-semibold underline" : "";
      return `<a href="${item.href}" class="block hover:underline ${activeClass}">${item.name}</a>`;
    })
    .join("");

  container.innerHTML = `
        <div id="sidebarOverlay" class="fixed inset-0 bg-black/40 z-40 hidden transition-opacity"></div>
        <aside id="sidebar" class="fixed top-0 left-0 z-50 w-64 h-full bg-[#F3F3F3] border-r-2 border-[#6D320E] shadow-xl flex flex-col justify-between -translate-x-full transition-transform duration-300 ease-in-out">
            <div>
                <div class="p-6 border-b-2 border-[#6D320E] flex justify-between items-center">
                    <h1 class="text-2xl font-kapakana text-[#6D320E]">Pecel Nusantara</h1>
                    <button id="closeBtn" class="text-[#6D320E] cursor-pointer focus:outline-none">
                        <i data-feather="x" class="w-6 h-6"></i>
                    </button>
                </div>

                <nav class="p-6 space-y-4 italic text-sm text-[#6D320E]">
                    ${navLinksHTML}
                </nav>
            </div>

            <div class="p-4 border-t-2 border-[#6D320E] flex items-center justify-between text-[#6D320E]">
                <span class="italic text-xs font-serif">Follow Us :</span>
                <div class="flex items-center gap-3">
                    <a href="https://instagram.com" target="_blank" class="hover:opacity-75">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" class="hover:opacity-75">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.25 2.56.03.88.54 1.7 1.29 2.16.89.55 2.04.57 2.95.05.82-.47 1.34-1.38 1.37-2.33.05-3.87.02-7.74.02-11.61z"/></svg>
                    </a>
                    <a href="https://wa.me/628123456789" target="_blank" class="hover:opacity-75">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                    </a>
                </div>
            </div>
        </aside>
    `;

  if (window.feather) {
    feather.replace();
  }

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  function toggleSidebar() {
    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  }

  if (menuBtn) menuBtn.addEventListener("click", toggleSidebar);
  if (closeBtn) closeBtn.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", toggleSidebar);
});
