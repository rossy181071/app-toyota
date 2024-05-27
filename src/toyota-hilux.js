import { LitElement, css, html } from 'lit'




export class ToyotaHilux extends LitElement {
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

    this.title = 'Hilux'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = ' La Hilux suele venir con un motor de 4 cilindros en línea.'

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' Varía según la generación y la región, pero típicamente se encuentra en el rango de 2.4 a 3.0 litros.'

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = ' Puede variar según la versión y el año de fabricación, pero generalmente se encuentra en el rango de 140 a 204 caballos de fuerza (104 a 152 kW).  '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = 'El torque puede variar significativamente según la versión y el año, pero suele estar en el rango de 253 a 500 libras-pie (343 a 678 Nm).'

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'Por lo general, tiene capacidad para transportar entre 2 y 5 ocupantes, dependiendo de la configuración de la cabina. '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = 'La Hilux es conocida por su tracción en las cuatro ruedas (4x4), aunque en algunas versiones también se ofrece tracción trasera (4x2).  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = 'Puede estar disponible con transmisión manual o automática, dependiendo de la configuración y la generación del modelo. Las transmisiones automáticas pueden ser convencionales o de tipo secuencial.  '

    this.title8 = 'Capacidad de carga:    '
    this.paragraph8 = ' La capacidad de carga útil puede variar, pero suele estar en el rango de 1,000 a 1,300 kg, dependiendo de la configuración y la carga distribuida. '

    this.title9 = 'Capacidad de remolque:    '
    this.paragraph9 = ' La Hilux tiene una capacidad de remolque que varía según la versión y el equipamiento, pero puede estar en el rango de 2,500 a 3,500 kg, dependiendo de la configuración y el año del modelo.  '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = 'La Hilux a menudo cuenta con características diseñadas para el trabajo pesado y el rendimiento todoterreno, como suspensión reforzada, diferencial de deslizamiento limitado, sistema de tracción en todas las ruedas, control de tracción y estabilidad, capacidad de llevar cargas grandes en la caja de carga, y sistemas de asistencia al conductor como control de crucero adaptativo y asistencia de arranque en pendientes. Además, dependiendo de la región y la especificación, puede incluir sistemas de infoentretenimiento avanzados, conectividad Bluetooth, y características de seguridad como frenado de emergencia automático y alerta de colisión frontal.  '

    this.Image1url = 'https://tse3.mm.bing.net/th?id=OIP.4VBgVMfJGu6jX-3vn533wQHaEc&pid=Api&P=0&h=180  '



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

window.customElements.define('toyota-hilux', ToyotaHilux)
