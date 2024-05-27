import { LitElement, css, html } from 'lit'




export class ToyotaPrius extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo  de mi pagina 
      */
      title: { type: String },


      /**
       * Este es el titulo 1 de mi pagina 
      */
      title1: { type: String },

      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },

      /**
        * Este es el titulo 2  de mi pagina 
       */
      title2: { type: String },

      /**
       * Este es el parrafo 2
       */
      paragraph2: { type: String },

      /**
        * Este es el titulo 3  de mi pagina 
       */
      title3: { type: String },

      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },

      /**
         * Este es el titulo 4  de mi pagina 
        */
      title4: { type: String },

      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },

      /**
         * Este es el titulo 5  de mi pagina 
        */
      title5: { type: String },

      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },

      /**
         * Este es el titulo 6  de mi pagina 
        */
      title6: { type: String },

      /**
       * Este es el parrafo 6
       */
      paragraph6: { type: String },

      /**
         * Este es el titulo 7  de mi pagina 
        */
      title7: { type: String },

      /**
       * Este es el parrafo 7
       */
      paragraph7: { type: String },

      /**
         * Este es el titulo 8 de mi pagina 
        */
      title8: { type: String },

      /**
       * Este es el parrafo 8
       */
      paragraph8: { type: String },

      /**
         * Este es el titulo 9  de mi pagina 
        */
      title9: { type: String },

      /**
       * Este es el parrafo 9
       */
      paragraph9: { type: String },

      /**
         * Este es el titulo 10  de mi pagina 
        */
      title10: { type: String },

      /**
       * Este es el parrafo 10
       */
      paragraph10: { type: String },

      /**
       * Esta es la url de la image 1
       */
      Image1url: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'Prius'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = '   El Toyota Prius tiene un motor de combustión interna de 4 cilindros en línea.  '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' El desplazamiento del motor del Prius suele ser alrededor de 1.8 litros.   '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = '  La potencia del motor del Prius varía según la generación y el modelo específico, pero típicamente se encuentra alrededor de 96 caballos de fuerza (hp) o 71 kilovatios (kW).   '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = ' El torque del motor del Prius suele estar en el rango de 105-120 libras-pie o aproximadamente 142-163 Newton metros.    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'El torque del motor del Prius suele estar en el rango de 105-120 libras-pie o aproximadamente 142-163 Newton metros.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = ' Principalmente tracción delantera (FWD), aunque hay versiones que pueden ofrecer tracción total (AWD) dependiendo del mercado y la generación.  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = 'El Toyota Prius está equipado con una transmisión continuamente variable (CVT) que optimiza la eficiencia del motor y la economía de combustible.    '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = 'El espacio de carga en el Prius varía según el modelo y la generación, pero suele estar alrededor de 24-27 pies cúbicos con los asientos traseros plegados.   '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = ' El Toyota Prius no está diseñado para remolcar cargas pesadas y generalmente no tiene capacidad de remolque significativa.    '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = 'El Prius a menudo está equipado con características especiales relacionadas con la eficiencia de combustible y la tecnología híbrida, como el sistema de propulsión híbrido, modos de conducción eco, pantalla táctil de información y entretenimiento, sistema de navegación, asistente de estacionamiento, y una variedad de sistemas de seguridad avanzados como frenado automático de emergencia, alerta de colisión frontal, control de crucero adaptativo, entre otros.   '

    this.Image1url = 'https://autodelmotor.com/wp-content/uploads/2022/11/toyota-prius-phev.jpg '
    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
        
        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        
        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        
        <h1>${this.title6}</h1>
        <p>${this.paragraph6}</p>
        
        <h1>${this.title7}</h1>
        <p>${this.paragraph7}</p>
        
        <h1>${this.title8}</h1>
        <p>${this.paragraph8}</p>
        
        <h1>${this.title9}</h1>
        <p>${this.paragraph9}</p>
        
        <h1>${this.title10}</h1>
        <p>${this.paragraph10}</p>

        <img src = "${this.Image1url}">

        
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
      body{
        background-color: olivedrab
      }
      #parrafo {
        background-color: coral
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: beige  
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: cadetblue;
      }
      img {
        width:20vw;
      }
      p {
        font-size:8vh;
      }
      h1{
        font-size:10vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;

      }





    `
  }
}

window.customElements.define('toyota-prius', ToyotaPrius)
