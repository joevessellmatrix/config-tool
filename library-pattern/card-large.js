let template2 = document.createElement("template");
template2.innerHTML =
  /*html*/
  `
 <style>

article {
    height: 100%;
    display: flex;
    border-radius: 10px;
    border: 1px solid gray;
}

.container {
    padding: 10px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}



.object  {
    width: auto;
    max-width: 100%;
    border-radius: 8px;
}

h5 {
    margin-block-end: 0.2em;
    font-size: 14px;
    font-weight: bold;
    
}

code {
    background-color: black;
    color: white;
    display: block;
    width: auto;
    padding: 12px;
    overflow: scroll;
    border-radius: 0 0 8px 8px;
    
}

small {
    color: gray;
    font-size: .8rem;
    flex: 1 0 auto;
}

small > ul {
    padding-inline-start: 20px;
}
    
    </style>
    <article>
    <div class="container">
        <slot class="object" name="object" ></slot>
        <h5>
            <slot name="title">Title</slot>
        </h5>
        <small>Notes:<ul>
            <slot name="text">Description</slot>
        </ul>
        </small>
        
        <code><slot name="code">Code</slot></code>
        <div>
    </article>
   
`;

class CardLarge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("card-large", CardLarge);
