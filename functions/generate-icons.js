function generateIcons(id, icons) {
  const itemList = document.getElementById(id);
  const itemsHTML = icons
    .map(
      (item) => `
          <div class="pl-section-description">
          <h3 class="pl">${item.title}</h3>
          <small class="pl">${item.details}</small>
          <small class="pl">${item.dimensions}</small>
          </div>
          ${item.icons
            .map(
              (it) => `
              ${it.card === "large" ? "<card-large>" : "<card-small>"}
                  <div slot="object">
                      <div class="pl-grid-svg-preview ${
                        it.style && it.style === "dark" && "dark-preview"
                      } ${
                it.style && it.style === "large" && "large-preview"
              } ${
                it.style &&
                it.style === "large+dark" &&
                "dark-preview large-preview"
              }">
                      <img src="images/icons/${it.value}"/>
                      </div>
                  </div>
                  <span slot="title">${it.name}</span>
                  <span slot="text">
                      ${it.notes.map((note) => `<li>${note}</li>`).join("")}
                  </span>
                  <span slot="code">
                      ${it.value}
                  </span>	
                  ${it.card === "large" ? "</card-large>" : "</card-small>"}
              `
            )
            .join("")}
      `
    )
    .join("");

  itemList.innerHTML = itemsHTML;
}
