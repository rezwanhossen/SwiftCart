const displaySingleProduct = (product) => {
  const modal = document.getElementById("details_prod");
  if (!modal) return;
  modal.innerHTML = `
    <div class="flex gap-3">
      <div class="flex-1">
        <img class="h-[300px]" src="${product.image}" alt="${product.title}" />
        <div class="flex my-3 justify-between">
          <p class="bg-indigo-100 badge rounded-xl">${product.category}</p>
          <p class="text-sm badge text-gray-500">
            <i class="text-orange-400 fa-solid fa-star"></i> ${product.rating?.rate} (${product.rating?.count})
          </p>
        </div>
      </div>
      <div class="flex-1 space-y-2">
        <h1 class="text-2xl font-bold">${product.title}</h1>
        <h1 class="text-2xl font-bold text-orange-600">$ ${product.price}</h1>
        <p>${product.description}</p>
      </div>
    </div>
  `;
  const dialog = document.getElementById("my_modal_5");
  if (dialog) dialog.showModal();
};

const detailsPage = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  displaySingleProduct(data);
};

const displayProducts = (data, containerId, limit = null) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  const products = limit ? data.slice(0, limit) : data;

  products.forEach((ele) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-base-50 h-96 shadow-xl flex flex-col">
        <figure>
          <img class="w-full h-[200px] object-contain" src="${
            ele.image
          }" alt="${ele.title}" />
        </figure>
        <div class="card-body flex flex-col">
          <div class="card-actions justify-between">
            <p class="bg-indigo-100 badge rounded-xl">${ele.category}</p>
            <p class="text-sm badge text-gray-500">
              <i class="text-orange-400 fa-solid fa-star"></i> ${
                ele.rating?.rate
              } (${ele.rating?.count})
            </p>
          </div>
          <h2 class="card-title h-12 overflow-hidden">
            ${
              ele.title.length > 25 ? ele.title.slice(0, 25) + "..." : ele.title
            }
          </h2>
          <h2 class="card-title">$ ${ele.price}</h2>
          <div class="card-actions justify-between mt-auto">
            <button onclick="detailsPage(${ele.id})" class="btn px-6 py-3">
              <i class="fa-solid fa-eye"></i> Details
            </button>
            <button class="btn bg-sky-500 hover:bg-sky-700 px-6 py-3 text-gray-50">
              <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
    container.append(card);
  });
};

const loadData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data, "three-product-show", 4);
  displayProducts(data, "product-Show");
};

const loadCategoryData = async (category) => {
  const url =
    category === "all"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`;
  const res = await fetch(url);
  const data = await res.json();

  displayProducts(data, "product-Show"); // for product page
};

const setActiveButton = (clickedBtn) => {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => btn.classList.remove("btn-primary"));
  clickedBtn.classList.add("btn-primary");
};

const loadCategory = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  const container = document.getElementById("catagorys-show");
  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.innerText = "All";
  allBtn.className = "btn btn-outline btn-primary category-btn";
  allBtn.addEventListener("click", () => {
    setActiveButton(allBtn);
    loadData();
  });
  container.append(allBtn);

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.className = "btn btn-outline btn-primary category-btn";
    btn.addEventListener("click", () => {
      setActiveButton(btn);
      loadCategoryData(cat);
    });
    container.append(btn);
  });

  allBtn.classList.add("btn-primary");
};

window.addEventListener("DOMContentLoaded", () => {
  loadCategory();
  loadData();
});
