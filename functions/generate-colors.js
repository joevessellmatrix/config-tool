function generateColors(id, colors) {
  const colorList = document.getElementById(id);
  const itemsHTML = colors
    .map(
      (item) => `
          <h3 class="pl">${item.title}</h3>
          ${item.colors
            .map(
              (it) => `
              <card-small>
                  <div slot="object">
                      <div class="pl-grid-color-preview" style="background-color: #${
                        it.color
                      };"></div>
                  </div>
                  <span slot="title">${it.name}</span>
                  <span slot="text">
                      ${it.notes.map((note) => `<li>${note}</li>`).join("")}
                  </span>
                  <span slot="code">
                      #${it.color}
                  </span>	
              </card-small>`
            )
            .join("")}
      `
    )
    .join("");

  colorList.innerHTML = itemsHTML;
}
