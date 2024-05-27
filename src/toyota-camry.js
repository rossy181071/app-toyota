import { LitElement, css, html } from 'lit'




export class ToyotaCamry extends LitElement {
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

    this.title = 'Camry'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = '  La mayoría de las versiones de la Toyota Camry están equipadas con un motor de cuatro cilindros en línea. Sin embargo, algunas versiones más recientes también ofrecen un motor V6 como opción.  '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' El desplazamiento del motor para el modelo de cuatro cilindros es típicamente alrededor de 2.5 litros, mientras que el V6 tiene un desplazamiento de aproximadamente 3.5 litros.   '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = ' La potencia del motor puede variar según el año y la versión específica, pero el motor de cuatro cilindros generalmente produce alrededor de 200-206 caballos de fuerza (aproximadamente 149-154 kW), mientras que el V6 puede producir alrededor de 301 caballos de fuerza (aproximadamente 224 kW).   '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = ' El torque del motor también puede variar, pero el motor de cuatro cilindros típicamente produce alrededor de 186-186 libras-pie (aproximadamente 253-253 Nm), mientras que el V6 puede producir alrededor de 267 libras-pie (aproximadamente 362 Nm).    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'La capacidad de ocupantes es típicamente de cinco pasajeros.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = ' La Toyota Camry generalmente está disponible con tracción delantera (FWD).  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = 'La transmisión más común es una automática de seis u ocho velocidades, pero algunos modelos más recientes también ofrecen una transmisión continua variable (CVT).    '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = 'La capacidad de carga en términos de peso de equipaje y carga varía según el año y el modelo, pero suele estar alrededor de 15-16 pies cúbicos en el maletero.   '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = 'La capacidad de remolque no es una característica típica de la Toyota Camry estándar. Es más un automóvil orientado al transporte de pasajeros y no está diseñado para remolcar cargas pesadas.    '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = ' Las funcionalidades especiales pueden incluir características de seguridad avanzadas como sistemas de asistencia al conductor, sistemas de infoentretenimiento, conectividad Bluetooth, asientos eléctricos, sistemas de navegación, entre otros, dependiendo del año y la versión del modelo. '

    this.Image1url = 'http://www.carfax.com/blog/wp-content/uploads/2015_CAS_2016_Camry_Special_001.jpg '
    



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

window.customElements.define('toyota-camry', ToyotaCamry)
