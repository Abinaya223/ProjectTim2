function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = products
    .map(
      (product) => `
    <div class="flex flex-col items-start text-left">
      <div class="w-full h-64 rounded-4xl border-4 border-[#7B4A29] overflow-hidden shadow-md bg-amber-100">
        <img src="${product.image}" alt="${product.nama}" class="w-full h-full object-cover">
      </div>
      <div class="mt-4 flex flex-col items-start">
        <h2 class="text-base font-bold text-[#7B4A29]">${product.nama}</h2>
        <p class="text-xs italic text-[#7B4A29] mt-1">IDR ${product.harga.toLocaleString("id-ID")}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

async function loadLandingProducts() {
  try {
    const response = await fetch("./data/products.json");
    const products = await response.json();

    const newMenuIds = [1, 2, 17];
    const newMenu = products
      .filter((item) => newMenuIds.includes(item.id))
      .slice(0, 3);

    renderProducts(newMenu, "landing-container");
  } catch (error) {
    console.error("Gagal memuat produk landing:", error);
  }
}

async function loadMainCourse() {
  try {
    const response = await fetch("./data/products.json");
    const products = await response.json();

    const mainCourseIds = [1, 2, 4, 5, 17, 18, 19, 20];
    const mainCourses = products.filter((item) =>
      mainCourseIds.includes(item.id),
    );

    renderProducts(mainCourses, "main-course-container");
  } catch (error) {
    console.error("Gagal memuat main course:", error);
  }
}

async function loadDessertDrink() {
  try {
    const response = await fetch("./data/products.json");
    const products = await response.json();

    const dessertDrinkIds = [3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const dessertDrinks = products.filter((item) =>
      dessertDrinkIds.includes(item.id),
    );

    renderProducts(dessertDrinks, "dessert-container");
  } catch (error) {
    console.error("Gagal memuat dessert & drink:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadLandingProducts();
  loadMainCourse();
  loadDessertDrink();
});
