/*
 * This web component is just a basic example.
 * It doesn't add accessibility things and the js code
 * is not optimized. 
 */

// Para tener un nuevo elemento HTML es necesario extender HTMLElement
class TodoList extends HTMLElement {
    constructor() {
        super();
        // Crea un shadow root para el elemento
        this.shadow = this.attachShadow({ mode: "open" });
    }


    connectedCallback() {
        // Crea una propiedad para el elemento y le asigna un valor.
        this.setAttribute('role', 'listbox')

        // Genera un template predefinido para el elemento HTML.
        // El template también incluye CSS
        const template = `
        <style>
          :host {
            contain: content;
            display: block;
            overflow-x: hidden;
            overflow-y: auto;
            border-radius: 10px;
            background-color: white;
            font-family: Arial;
            max-width: 300px;
            margin: 0 auto;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
          }
  
        </style>
        <slot>
          <p>
            Yeah! Nothing to do.
          </p>
        </slot>
      `;

        // Agrega el template al shadow root creado para el elemento
        this.shadow.innerHTML = template;
    }
}

// Define un nombre de elemento HTML y le asigna la clase creada
window.customElements.define("todo-list", TodoList);


/*
 * This web component is just a basic example.
 * It doesn't add accessibility things and the js code
 * is not optimized. 
 */


class TodoLi extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }


    // El valor de la etiqueta es envuelto por el elemento todo-li.
    // Este valor es reemplazado dentro del elemento slot
    connectedCallback() {
        this.setAttribute('role', 'option')
        const template = `
        <style>
          :host {
            display: flex;
            padding: 8px 16px 8px 8px;
          }
  
          label {
            display: contents;
          }
  
          input {
            margin-right: 8px;
          }
  
          input:checked + label {
            opacity: 0.3;
          }
        </style>
        <input id="input" type="checkbox" />
        <label for="input">
          <slot></slot>
        </label>
      `;

        // this.shadow.innerHTML = template; // ShadowDOM
        this.shadow.innerHTML = template;
    }
}

window.customElements.define("todo-li", TodoLi);