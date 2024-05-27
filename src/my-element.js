import { LitElement, css, html } from 'lit'
import './toyota-hilux'
import './toyota-camry'
import './toyota-corolla'
import './toyota-prius'
import './toyota-rav4'


export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * The number of page currently displayed
       */
      position: { type: Number },
    }
  }

  constructor() {
    super()
    this.position = 0
  
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 4
    } else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position === 4) {
      this.position = 0
    } else {
      this.position++
    }
  }

  render() {
    return html`
      <div>
    <button @click="${this.setPrevious}">Anterior</button>
    <button @click="${this.setNext}">Siguiente</button>
    <h1>${this.position}</h1>
    ${this.position === 0 ? html` <toyota-hilux></toyota-hilux>` : ''}

    ${this.position === 1 ? html` <toyota-camry></toyota-camry>` : ''}

    ${this.position === 2 ? html` <toyota-corolla></toyota-corolla>` : ''}

    ${this.position === 3 ? html` <toyota-prius></toyota-prius>` : ''}

    ${this.position === 4 ? html` <toyota-rav4></toyota-rav4>` : ''}
    
      </div>
    
    `
  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      
      }
      

  `
  }
}

window.customElements.define('my-element', MyElement)
