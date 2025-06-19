function generateTypography(id, typography) {
  const itemList = document.getElementById(id);
  const itemsHTML = typography
    .map(
      (item) => `
          <div class="pl-section-description">
          <small class="pl">${item.details}</small>
          </div>
          ${
            item.typography &&
            item.typography
              .map(
                (it) => `
              <card-small>
                  <div slot="object">
                      <div class="pl-grid-space-preview large-preview">
                      <p style="${it.value}">${it.example}</p>
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
