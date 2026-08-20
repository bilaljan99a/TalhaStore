document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("store-name").textContent = STORE.name;
  document.getElementById("store-tagline").textContent = STORE.tagline;
  document.getElementById("store-city").textContent = STORE.city;
  document.title = STORE.name + " — " + STORE.tagline;

  const heroWA = document.getElementById("hero-whatsapp");
  heroWA.href = waLink(`Assalam o Alaikum! Mujhe ${STORE.name} se kuch cheezein order karni hain.`);

  const chipRow = document.getElementById("chip-row");
  const grid = document.getElementById("product-grid");

  let activeCategory = "Sab Kuch";

  function waLink(message) {
    return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  function money(n) {
    return "Rs " + n.toLocaleString("en-PK");
  }

  function renderChips() {
    chipRow.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const chip = document.createElement("button");
      chip.className = "chip" + (cat === activeCategory ? " chip--active" : "");
      chip.textContent = cat;
      chip.addEventListener("click", () => {
        activeCategory = cat;
        renderChips();
        renderProducts();
      });
      chipRow.appendChild(chip);
    });
  }

  function renderProducts() {
    grid.innerHTML = "";
    const items =
      activeCategory === "Sab Kuch"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);

    if (items.length === 0) {
      grid.innerHTML = `<p class="empty">Is category mein abhi koi product nahi hai.</p>`;
      return;
    }

    items.forEach((p, i) => {
      const card = document.createElement("article");
      card.className = "tag-card";
      card.style.setProperty("--i", i % 6);
      card.innerHTML = `
        <div class="tag-card__hole"></div>
        <div class="tag-card__img" style="background-image:url('${p.image}')"></div>
        <div class="tag-card__body">
          <h3>${p.name}</h3>
          <p class="tag-card__note">${p.note}</p>
          <div class="tag-card__price">${money(p.price)}</div>
          <a class="order-btn" target="_blank" rel="noopener" href="${waLink(
            `Assalam o Alaikum! Mujhe "${p.name}" (${money(p.price)}) order karni hai.`
          )}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"/>
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
            </svg>
            Order karein
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  renderChips();
  renderProducts();

  document.getElementById("year").textContent = new Date().getFullYear();
});
