import { LitElement, css, html } from 'lit'




export class ToyotaCorolla extends LitElement {
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

    this.title = 'Corolla'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = 'Motor de 4 cilindros en línea.  '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = 'Varía entre aproximadamente 1.8 y 2.0 litros dependiendo del modelo y la generación.  '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = '  La potencia puede variar entre 120 y 170 caballos de fuerza (hp), o entre 90 y 127 kilovatios (kW), dependiendo del año y la especificación del motor.  '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = 'El torque puede variar entre 128 y 155 libras-pie, o entre 174 y 210 Newton metros, según el motor y la especificación.  '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'Por lo general, capacidad para 5 pasajeros. '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = 'Mayormente tracción delantera (FWD), aunque puede haber modelos con tracción total (AWD) dependiendo de la generación y el mercado.  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = ' Puede variar entre manual, automática CVT (Transmisión Variable Continua), automática de varias velocidades o incluso transmisiones de doble embrague en versiones más deportivas.  '

    this.title8 = 'Capacidad de carga:    '
    this.paragraph8 = 'El espacio de carga varía según el modelo y la configuración, pero normalmente está alrededor de 13-15 pies cúbicos en el maletero.  '

    this.title9 = 'Capacidad de remolque:    '
    this.paragraph9 = 'El Toyota Corolla generalmente no se considera un automóvil diseñado para remolcar cargas pesadas, por lo que su capacidad de remolque puede ser limitada, generalmente entre 1000 y 1500 libras (450-680 kg), si está permitido por el fabricante.   '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = 'Pueden incluir sistemas de seguridad avanzados como frenado de emergencia automático, control de crucero adaptativo, asistencia de mantenimiento de carril, sistemas de entretenimiento con pantalla táctil, conectividad Bluetooth, asientos calefaccionados, entre otros, dependiendo del modelo y nivel de equipamiento.  '

    this.Image1url = 'https://tse1.mm.bing.net/th?id=OIP.8TpNLDKzC6jlKB4vIldGbwAAAA&pid=Api&P=0&h=180  '



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

window.customElements.define('toyota-corolla', ToyotaCorolla)
