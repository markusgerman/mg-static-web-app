class MyButton extends HTMLElement {
    constructor() {
      super();
      
      // Erstelle das Shadow DOM
      const shadow = this.attachShadow({mode: 'open'});
  
      // Erstelle einen Button
      const button = document.createElement('button');
      button.textContent = 'Klick mich!';
  
      // Füge Event Listener hinzu
      button.addEventListener('click', () => {
        console.log('Der Button wurde geklickt!');
      });
  
      // Füge das Button-Element zum Shadow DOM hinzu
      shadow.appendChild(button);
  
      // Optional: Stile für den Button hinzufügen
      const style = document.createElement('style');
      style.textContent = `
        button {
          padding: 10px 20px;
          background-color: #0078D4;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #005a8b;
        }
      `;
      shadow.appendChild(style);
    }
  }
  
  // Registriere die Web Component
  customElements.define('my-button', MyButton);