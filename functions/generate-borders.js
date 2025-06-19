function generateBorders(id, border) {
  const itemList = document.getElementById(id);
  const itemsHTML = border
    .map(
      (item) => `
          <div class="pl-section-description">
          <small class="pl">${item.details}</small>
          </div>
          ${
            item.borders &&
            item.borders
              .map(
                (it) => `
              <card-small>
                  <div slot="object">
                      <div class="pl-grid-border-preview large-preview">
                      <div class="space-box" style="${it.value}"></div>
                      </div>
                  </div>
                  <span slot="title">${it.name}</span>
                  <span slot="text">
                      ${it.notes.map((note) => `<li>${note}</li>`).join("")}
                  </span>
                  <span slot="code">
                      ${it.value}
                  </span>	
              </card-small>`
              )
              .join("")
          }
      `
    )
    .join("");

  itemList.innerHTML = itemsHTML;
}
