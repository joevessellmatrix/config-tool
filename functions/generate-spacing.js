function generateSpacing(id, spacing) {
  const itemList = document.getElementById(id);
  const itemsHTML = spacing
    .map(
      (item) => `
          <div class="pl-section-description">
          <small class="pl">${item.details}</small>
          </div>
          ${
            item.spacing &&
            item.spacing
              .map(
                (it) => `
              <card-small>
                  <div slot="object">
                      <div class="pl-grid-space-preview large-preview">
                      <div class="space-box" style="width: ${
                        it.space
                      }; height: ${it.space}"></div>
                      </div>
                  </div>
                  <span slot="title">${it.name}</span>
                  <span slot="text">
                      ${it.notes.map((note) => `<li>${note}</li>`).join("")}
                  </span>
                  <span slot="code">
                      ${it.space}
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
