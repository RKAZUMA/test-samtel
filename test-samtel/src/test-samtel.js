import { LitElement, html, css } from "lit";
import "./first-page.js";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;
const offi = new URL("../assets/Logo.jpg", import.meta.url).href;

class TestSamtel extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--test-samtel-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }

    .div-body {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .info-tittle {
      width: 100%;
      max-width: 400px;
    }

    .detail {
      font-size: 15px;
    }

    .info-content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }

    .info-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    span {
      background: #002f99;
      color: #fff;
      padding: 5px 12px;
      border-radius: 50%;
      font-size: 30px;
      margin-right: 15px;
      width: 25px;
    }

    .info-name,
    .info-document,
    .info-act {
      margin: 1px 0;
      font-size: 15px;
    }

    .info-participation {
      margin: 3px 0;
      font-size: 15px;
    }

    hr {
      width: 100%;
    }

    form {
      width: 100%;
      max-width: 400px;
    }

    .info-letter-detail {
      background: #002f99;
      color: #fff;
      padding: 5px 12px;
      border-radius: 50%;
      font-size: 40px;
      margin-right: 15px;
      width: 25px;
    }

    .info-name-detail {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 35px;
    }

    .tittle {
      color: #000000;
      font-weight: bold;
      font-size: 16px;
      display: flex;
    }

    label {
      color: #000000;
      font-weight: bold;
      display: flex;
      font-size: 14px;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: -5px;
    }

    input {
      padding: 10px;
      font-weight: 600;
      width: 100%;
      margin-bottom: 12px;
    }

    .div-radio {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      flex-direction: row;
    }

    .radio-input {
      width: 35px;
      transform: scale(1.8);
    }

    .radio-label {
      margin-right: 40px;
    }




    .logo-offi{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      margin: 60px;
      width: 100%;
      max-width: 400px;
    }
    
    .logo-offi img {
      width: 70px;
      margin: 30px;
    }
      
  `;

  constructor() {
    super();
    this.header = "Software Tecnologies S.A";
    this.empresa = "80808080";
    this.person;
    this.accionistas = {
      accionistas: [
        {
          NIT: "80808080",
          Nombre: "Lucia Gaviria",
          TipoDocumento: "CC",
          Documento: 10282952,
          Porcentaje: "25%",
        },
        {
          NIT: "80808080",
          Nombre: "Catalina Orjuela",
          TipoDocumento: "CC",
          Documento: 10282537,
          Porcentaje: "25%",
        },
        {
          NIT: "80808080",
          Nombre: "Manofacturas S.A.S",
          TipoDocumento: "NIT",
          Documento: 90909090,
          CantidadAccionitas: 5,
          Porcentaje: "8%",
        },
        {
          NIT: "80808080",
          Nombre: "Daniel Rojas",
          TipoDocumento: "CC",
          Documento: 10282356,
          Porcentaje: "22%",
        },
        {
          NIT: "80808080",
          Nombre: "Arturo Henao",
          TipoDocumento: "CC",
          Documento: 10282340,
          Porcentaje: "11%",
        },
        {
          NIT: "90909090",
          Nombre: "Augusto Garcia",
          TipoDocumento: "CC",
          Documento: 10282910,
          Porcentaje: "20%",
        },
        {
          NIT: "90909090",
          Nombre: "Catalina Rodriguez",
          TipoDocumento: "CC",
          Documento: 10282511,
          Porcentaje: "10%",
        },
        {
          NIT: "90909090",
          Nombre: "Pinturas S.A.S",
          TipoDocumento: "NIT",
          Documento: 10282312,
          CantidadAccionitas: 5,
          Porcentaje: "15%",
        },
        {
          NIT: "90909090",
          Nombre: "Daniel Rojas",
          TipoDocumento: "CC",
          Documento: 10282313,
          Porcentaje: "9%",
        },
        {
          NIT: "90909090",
          Nombre: "Ana sofia Enao",
          TipoDocumento: "CC",
          Documento: 10282314,
          Porcentaje: "40%",
        },
      ],
    };
  }

  updated(changedProperties) {
    console.log(changedProperties);
    super.updated(changedProperties);
    if (changedProperties && changedProperties.get("person")) {
      this.shadowRoot
        .getElementById("info")
        .addEventListener("click", function (e) {
          console.log(e);
        });
    }
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>
        <h2>NIT. ${this.empresa}</h2>
      </main>
      ${this.getInfoList()} ${this.getDetail(this.accionistas.accionistas[2])}
      ${this.getDetailPerson(this.accionistas.accionistas[6])}
      ${this.getOficina()}
      <p class="app-footer">🚽 Made with love by Jayson Becerra</p>
    `;
  }

  getInfoList() {
    return html`
      <div class="info-tittle">
        <p class="tittle">ACCIONISTAS</p>
        <p class="detail">
          Esta es la informacion sobre los accionistas de tu empresa.
        </p>
      </div>
      <div class="div-body">
        ${this.accionistas.accionistas.map(
          (e) => html` ${this.empresa == e.NIT ? this.getInfo(e) : ``} `
        )}
      </div>
    `;
  }

  getInfo(persona) {
    this.person = persona;
    return html`
      <div id="info" class="info-content">
        <span class="info-letter">${persona.Nombre.charAt(0)}</span>
        <div class="info-text">
          <p class="info-name">${persona.Nombre}</p>
          <p class="info-document">
            ${persona.TipoDocumento} ${persona.Documento}
          </p>
          ${persona.CantidadAccionitas
            ? html`<p class="info-act">
                ${persona.CantidadAccionitas} accionistas
              </p>`
            : ``}
          <p class="info-participation">Participacion: ${persona.Porcentaje}</p>
        </div>
      </div>
      <hr />
    `;
  }

  getDetail(persona) {
    return html`
      <form>
        <div class="info-content-detail">
          <span class="info-letter-detail">${persona.Nombre.charAt(0)}</span>
          <div class="info-text-detail">
            <p class="info-name-detail">${persona.Nombre}</p>
          </div>
        </div>
        <p class="tittle">INFORMACION SOBRE EL MIEMBRO</p>
        <label for="tdoc">Tipo Documento:</label>
        <input
          type="text"
          id="tdoc"
          name="tdoc"
          value="${persona.TipoDocumento}"
        />
        <label for="ndoc">Numero de Documento:</label>
        <input type="text" id="ndoc" name="ndoc" value="${persona.Documento}" />
        <label for="tname">Razon Social:</label>
        <input type="text" id="tname" name="tname" value="${persona.Nombre}" />
        <label for="porc">Porcentaje de Participacion:</label>
        <input
          type="text"
          id="porc"
          name="porc"
          value="${persona.Porcentaje}"
        />

        <p class="tittle">COMPOSICION DEL ACCIONISTA</p>

        <div class="div-body">
          ${this.accionistas.accionistas.map(
            (e) =>
              html`
                ${persona.Documento == e.NIT && e.TipoDocumento != "NIT"
                  ? this.getInfo(e)
                  : ``}
              `
          )}
        </div>
        <input type="submit" value="Salir " />
      </form>
    `;
  }

  getDetailPerson(persona) {
    return html`
      <form>
        <div class="info-content-detail">
          <span class="info-letter-detail">${persona.Nombre.charAt(0)}</span>
          <div class="info-text-detail">
            <p class="info-name-detail">${persona.Nombre}</p>
          </div>
        </div>
        <p class="tittle">INFORMACION SOBRE EL ACCIONISTA</p>
        <label for="tdoc">Tipo Documento:</label>
        <input
          type="text"
          id="tdoc"
          name="tdoc"
          value="${persona.TipoDocumento}"
        />
        <label for="ndoc">Numero de Documento:</label>
        <input type="text" id="ndoc" name="ndoc" value="${persona.Documento}" />
        <label for="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value="${this.getNameApellido(persona.Nombre, "N")}"
        />
        <label for="ape">Apellido:</label>
        <input
          type="text"
          id="ape"
          name="ape"
          value="${this.getNameApellido(persona.Nombre, "A")}"
        />
        <label for="porc">Porcentaje de Participacion:</label>
        <input
          type="text"
          id="porc"
          name="porc"
          value="${persona.Porcentaje}"
        />

        <p class="tittle">PERSONAS EXPUESTAS POLITICAMENTE (PEP)</p>
        <p class="detail">
          Es una Persona Expuesta Politicamente (PEP), esta relacionada,
          asociada o es familiar de una?
        </p>

        <div class="div-radio">
          <input
            class="radio-input"
            type="radio"
            id="si"
            name="si"
            value="Si"
          />
          <label class="radio-label" for="si">Si</label>
          <input
            class="radio-input"
            type="radio"
            id="no"
            name="no"
            value="No"
          />
          <label class="radio-label" for="no">No</label>
        </div>

        <input type="submit" value="Salir " />
      </form>
    `;
  }

  getNameApellido(fullName, type) {
    const splitString = fullName.split(" ");
    return type == "N" ? splitString[0] : splitString[1];
  }

  getOficina() {
    return html`
      <div class="logo-offi" id="info" class="office-content">
        <img alt="office" src=${logo} />
        <p class="tittle">Es necesario que vayas a una oficina.</p>
        <p class="detail">
          Acercate a una oficina para validar tu informacion y continuar con la solicitud.
        </p>
      </div>
    `;
  }
}

customElements.define("test-samtel", TestSamtel);
