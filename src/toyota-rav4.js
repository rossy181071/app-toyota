import { LitElement, css, html } from 'lit'




export class ToyotaRav4 extends LitElement {
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

    this.title = 'Rav4'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = ' El Toyota RAV4 suele estar equipado con un motor de 4 cilindros en línea.    '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' El desplazamiento del motor varía según el año y la generación, pero generalmente está en el rango de 2.0 a 2.5 litros.  '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = '  La potencia del motor puede variar dependiendo del modelo y la generación, pero típicamente está entre 175 y 203 caballos de fuerza (hp), o entre 130 y 151 kilovatios (kW).    '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = 'El torque del motor del RAV4 suele estar en el rango de 172 a 184 libras-pie, o aproximadamente 233 a 250 Newton metros, dependiendo del motor y la especificación.     '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'Por lo general, capacidad para 5 pasajeros, aunque algunos modelos pueden ofrecer una configuración de asientos para 7 pasajeros.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = ' La tracción puede variar dependiendo del modelo y la especificación, pero comúnmente se encuentran versiones con tracción delantera (FWD) o tracción en las cuatro ruedas (AWD).  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = ' La transmisión también puede variar, pero comúnmente se encuentra una transmisión automática convencional de varias velocidades o una transmisión automática de tipo CVT (Transmisión Variable Continua).    '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = ' El espacio de carga varía según la configuración de asientos y el modelo específico, pero suele estar en el rango de 37 a 69 pies cúbicos con los asientos traseros abatidos.   '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = '  La capacidad de remolque del RAV4 puede variar según la generación y la especificación, pero generalmente está en el rango de 1500 a 3500 libras (aproximadamente 680 a 1588 kg) dependiendo del motor y la configuración.    '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = ' Las características especiales pueden incluir sistemas de tracción en todas las ruedas (AWD), modos de conducción seleccionables, sistemas de asistencia al conductor como control de crucero adaptativo, alerta de colisión frontal, frenado de emergencia automático, sistema de infoentretenimiento con pantalla táctil, conectividad Bluetooth, y una variedad de sistemas de seguridad avanzados dependiendo del modelo y nivel de equipamiento.   '

    this.Image1url = 'https://tse3.mm.bing.net/th?id=OIP.mbtziVbkW693K7vzJlgZdwHaE8&pid=Api&P=0&h=180 '
    



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

window.customElements.define('toyota-rav4', ToyotaRav4)
