import React from "react";
import { TableContext } from "../Context/TableContext";

function VistaParcial() {
  const {
    formularioActivate,
    vistaParcial,
    material,
    concreto,
    numMaterial,
    listarEsfuerzo,
    listarValorEsfuerzo,
    listarUnidadesMedida,
    listarTipoResistencia,
    listarAplPrincipales,
    listarTMA,
    listarRevenimiento,
    listarDensidad,
    listarSistColocacion,
    listarClasExposicion,
    listarFlujoRev,
    listarIonCloruro,
    setFormularioActivate,
    listarFibraConcre,
  } = React.useContext(TableContext);


  const [esfuerzo, setEsfuerzo]= React.useState('')
  const [valorEsfuerzo, setValorEsfuerzo]= React.useState('')
  const [uValorEsfuerzo, setUValorEsfuerzo]= React.useState('')
  const [resistenciaValorEsfuerzo, setResistenciaValorEsfuerzo]= React.useState('')
  const [aplPrincipales, setAplPrincipales]= React.useState('')
  const [TMA, setTMA]= React.useState('')
  const [uTMA, setUTMA]= React.useState('')
  const [revenimiento, setRevenimiento]= React.useState('')
  const [uRevenimiento, setURevenimiento]= React.useState('')
  const [densidad, setDensidad]= React.useState('')
  const [uDensidad, setUDensidad]= React.useState('')
  const [sisColocacion, setSisColocacion]= React.useState('')
  const [clasExposicion, setClasExposicion]= React.useState('')
  const [flujoRev, setFlujoRev]= React.useState('')
  const [uFlujoRev, setUFlujoRev]= React.useState('')
  const [uElasticidad, setUElasticidad]= React.useState('')
  const [ionCloruro, setIonCloruro]= React.useState('')
  const [fibra, setFibra]= React.useState('')
  const [abreviado, setAbreviado] = React.useState('')
  const [elasticidad, setElasticidad] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [capilar, setCapilar] = React.useState('')
  const [abreviado2, setAbreviado2] = React.useState('')
  const [trabajabilidad, setTrabajabilidad] = React.useState('')
  const [clase, setClase] = React.useState('')
  const [color, setColor] = React.useState('')
  const [comportamiento, setComportamiento] = React.useState('')
  const [contenido, setContenido] = React.useState('')
  const [contenidoIon, setContenidoIon] = React.useState('')
  const [tiempoDePrueba, setTiempoDePrueba] = React.useState('')
  const [palabrasClave, setPalabrasClave] = React.useState('')
  const [comentarios, setComentarios] = React.useState('')


  const crearDatosDeMateriales = () => {

    const datosGenerales = {
        esfuerzo,
valorEsfuerzo,
uValorEsfuerzo,
resistenciaValorEsfuerzo,
aplPrincipales,
TMA,
uTMA,
revenimiento,
uRevenimiento,
densidad,
uDensidad,
sisColocacion,
clasExposicion,
flujoRev,
uFlujoRev,
uElasticidad,
ionCloruro,
fibra,
abreviado,
elasticidad,
edad,
capilar,
abreviado2,
trabajabilidad,
clase,
color,
comportamiento,
contenido,
contenidoIon,
tiempoDePrueba,
palabrasClave,
comentarios,
    }

    console.table(datosGenerales);

      creatMaterial();
      
      setTimeout(() => {  
        crearConcreto();
      }, 1000);
      
      setTimeout(() => {
        caracteristicasEspeciales();  
      }, 1600);
      
      
      setFormularioActivate(false);
  }
  
  const creatMaterial = () => {
    const datas = {
      "numMat": 1,
      "codigoOmc": vistaParcial[0].Codigo,
      "Consecutivo": material,
      "descriCorta": vistaParcial[0].descriSpa.substr(0,100),
      "descriLarga": vistaParcial[0].descriSpa,
      "Comentarios": comentarios,
      "palabrasCve": palabrasClave,
      "codigoBimsa": null,
    }
    
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(datas);

  var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/v1/CrearMaterial/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

  }

  const crearConcreto = () => {
    
    const codigo = vistaParcial[0].Codigo;

    const datas = {
      "numMat": 0,
      "Codigo": codigo,
      "fk_Material": numMaterial,
      "fk_ClasExpo": clasExposicion,
      "fk_SistColoc": sisColocacion,
      "fk_Densidad": densidad,
      "fk_Reven": revenimiento,
      "fk_FlujoRev": flujoRev,
      "fk_FibraConcre": fibra,
      "fk_ValEsf": valorEsfuerzo,
      "fk_Tma": TMA,
      "fk_AplPrinc": aplPrincipales,
    }
    //concreto
    console.table(datas)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify(datas);
  
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
  
    fetch("http://127.0.0.1:8000/api/v1/CrearConcreto/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

  }

  const caracteristicasEspeciales = () => {
    console.log(concreto);
    const datas = {
      modElast:elasticidad,
      Acronimo:abreviado,
      Edad:edad,
      absorcionCap:capilar, 
      Acronimo2:abreviado2,
      trabaExtend:trabajabilidad,
      Clase:clase,
      Color:color,
      Comportamiento:comportamiento,
      conAire:contenido,
      conIonClor:contenidoIon,
      tiempoPrueba:tiempoDePrueba,
      fk_IonClor:ionCloruro,
      fk_Concreto:concreto,    
    };
    //caracteristica especial
    console.table(datas)

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(datas);

  var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/v1/CrearCaracEspe/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

  }


  function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}


  return (
    <div className="container bg-light border">
      <br />
      <hr />
      <br />
      
      <div className="row gy-2 border pt-1 pb-3">
        <label className="col-md-2 control-label">
          Código:
          <input
            type="text"
            value={formularioActivate ? vistaParcial[0].Codigo : ""}
            name="codigoOmc"
            className="form-control"
            disabled
          />
        </label>
        <label className="col-md-2 control-label">
          Consecutivo:
          <input
            className="form-control"
            type="text"
            value={material}
            disabled
          />
        </label>
        <label className="col-md-6 control-label">
          Descripción en Inglés:
          <input
            type="text"
            className="form-control"
            value={formularioActivate ? vistaParcial[0].descriEng : ""}
            disabled
          />
        </label>
        <label className="col-md-6 control-label">
          Descripción en Español:
          <input
            type="text"
            className="form-control"
            value={formularioActivate ? vistaParcial[0].descriSpa : ""}
            disabled
          />
        </label>
      </div>

      <div className="row gy-2 justify-content-between my-2">
        {/* <!--Esfuerzo--> */}
        <label className="col-md-2 control-label">
          Esfuerzo:
          <select onChange={e => setEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idEsfuerzo">
            <option >Selecciona...</option>
            {listarEsfuerzo.map((value, index) => (
              <option key={index} value={value.idEsfuerzo}>
                {value.tipoEsfuerzo}
              </option>
            ))}
          </select>
        </label>
        {/* <!--ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          fc:
          <select onChange={e => setValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idValEsf">
            <option value="">Selecciona...</option>
            {listarValorEsfuerzo.map((valorEs, index) => (
              <option key={index} value={valorEs.idValEsf}>
                {valorEs.Valor}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          Unidad Esfuerzo:
          <select onChange={e => setUValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idUniMedVE">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.idUniMed}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--TipoResistencia para ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          Tipo Resistencia:
          <select onChange={e => setResistenciaValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idTipoResist">
            <option value="">Selecciona...</option>
            {listarTipoResistencia.map((value, index) => (
              <option key={index} value={value.idTipoResist}>
                {value.Tipo}
              </option>
            ))}
          </select>
        </label>
        {/* <!--AplPrincipales--> */}
        <label className="col-md-2 control-label">
          Usos y/o Aplicaciones:
          <select onChange={e => setAplPrincipales(e.target.value)} className="form-select form-select-sm" name="idAplPrinc">
            <option value="">Selecciona...</option>
            {listarAplPrincipales.map((value, index) => (
              <option key={index} value={value.idAplPrinc}>
                {value.aplicaciones}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="row gy-2 justify-content-between">
        {/* <!--TMA--> */}
        <label className="col-sm-3 control-label">
          TMA:
          <select onChange={e => setTMA(e.target.value)} className="form-select form-select-sm" name="idTma">
            <option value="">Selecciona...</option>
            {listarTMA.map((value, index) => (
              <option key={index} value={value.idTma}>
                {value.valTma}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para TMA--> */}
        <label className="col-sm-3 control-label">
          Unidad TMA:
          <select onChange={e => setUTMA(e.target.value)} className="form-select form-select-sm" name="idUniMedTMA">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.idUniMed}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--Revenimiento--> */}
        <label className="col-sm-3 control-label">
          Revenimiento:
          <select onChange={e => setRevenimiento(e.target.value)} className="form-select form-select-sm" name="idReven">
            <option value="">Selecciona...</option>
            {listarRevenimiento.map((value, index) => (
              <option key={index} value={value.idReven}>
                {value.valRev}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para Revenimiento--> */}
        <label className="col-sm-3 control-label">
          Unidad de Revenimiento:
          <select onChange={e => setURevenimiento(e.target.value)} className="form-select form-select-sm" name="idUniMedR">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.idUniMed}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* <!--Densidad--> */}
      <hr />
      <div className="row gy-2 justify-content-around">
        <label className="col-sm-4 control-label">
          Densidad:
          <select onChange={e => setDensidad(e.target.value)} className="form-select form-select-sm" name="idDensidad">
            <option value="">Selecciona...</option>
            {listarDensidad.map((value, index) => (
              <option key={index} value={value.idDensidad}>
                {value.valDensidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para Densidad--> */}
        <label className="col-sm-4 control-label">
          Unidad Densidad:
          <select onChange={e => setUDensidad(e.target.value)} className="form-select form-select-sm" name="idUniMedD">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.idUniMed}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--SisColocacion--> */}
        <label className="col-sm-4 control-label">
          Sistema de Colocación:
          <select onChange={e => setSisColocacion(e.target.value)} className="form-select form-select-sm" name="idSistColoc">
            <option value="">Selecciona...</option>
            {listarSistColocacion.map((value, index) => (
              <option key={index} value={value.idSistColoc}>
                {value.tipoSistema}
              </option>
            ))}
          </select>
        </label>
        {/* <!--ClasExposicion--> */}
        <label className="col-sm-4 control-label">
          Clase de Exposición:
          <select onChange={e => setClasExposicion(e.target.value)} className="form-select form-select-sm" name="idClasExpo">
            <option value="">Selecciona...</option>
            {listarClasExposicion.map((value, index) => (
              <option key={index} value={value.idClasExpo}>
                {value.Condicion}
              </option>
            ))}
          </select>
        </label>
        {/* <!--FlujoRev--> */}
        <label className="col-sm-4 control-label">
          Flujo de Revenimiento:
          <select onChange={e => setFlujoRev(e.target.value)} className="form-select form-select-sm" name="idFlujoRev">
            <option value="">Selecciona...</option>
            {listarFlujoRev.map((value, index) => (
              <option key={index} value={value.idFlujoRev}>
                {value.valFluRev}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para FlujoRev--> */}
        <label className="col-sm-4 control-label">
          Unidad FlujoRev:
          <select onChange={e => setUFlujoRev(e.target.value)} className="form-select form-select-sm" name="idUniMedFR">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.idUniMed}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="card-header">
        <strong>Caracteristicas Especificas</strong>
      </div>
      <div className="card-body">
        <form className="row gy-2 justify-content-start align-items-end form">

          <div className="col-3">
          <label className="form-label" htmlFor="Abreviado">Acrónimo del modulo de elasticidad:</label>
          <input className="form-control form-control-sm" onChange={e => setAbreviado(e.target.value)} id="Abreviado" type="text" maxLength={3} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Valor de modulo de elasticidad:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" min='1' max='999' onChange={e => setElasticidad(e.target.value)} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
            <label className="form-label" htmlFor="elasticidad">Edad de resistencia especificada:</label>
            <div className="input-group">
              <input onChange={e => {setEdad(e.target.value); validaNumericos(e)}} type="number" pattern="[0-9]{0,3}" min='1' max='999' aria-label="Last name" className="form-control form-control-sm"/>
              <select onChange={e => setUElasticidad(e.target.value)} className="form-select form-control-sm" id="inputGroupSelect01">
              <option >Tiempo</option>
              <option defaultValue="1">Horas</option>
              <option defaultValue="2">Días</option>
              </select>
            </div>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Absorción Capilar:</label>
          <input className="form-control form-control-sm" onChange={e => setCapilar(e.target.value)} id="elasticidad" type="number" min='1' max='999' placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Acrónimo de absorción capilar:</label>
          <input className="form-control form-control-sm" id="elasticidad" onChange={e => setAbreviado2(e.target.value)} type="text" maxLength={3} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Trabajabilidad Extendida:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" min='1' max='999' onChange={e =>setTrabajabilidad(e.target.value)} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Clase(NTC-CDMX):</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" placeholder="" onChange={e=>setClase(e.target.value)} aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Color:</label>
          <input className="form-control form-control-sm" onChange={e => setColor(e.target.value)} id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Comportamiento:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" onChange={e => setComportamiento(e.target.value)} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Contenido de aire:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" min='1' max='999' onChange={e=> setContenido(e.target.value)} placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Contenido de Ion Cloruro:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" min='1' max='999' onChange={e => setContenidoIon(e.target.value)} placeholder="" aria-label=""></input>
          </div>

          <label className="col-md-3 control-label">
            Ion Cloruro:
            <select onChange={e => setIonCloruro(e.target.value)} className="form-select form-select-sm" name="idIonClor">
              <option value="">Selecciona...</option>
              {listarIonCloruro.map((value, index) => (
                <option key={index} value={value.idIonClor}>
                  {value.tipoPenet} {value.cargaPesada} Coulomb
                </option>
              ))}
            </select>
          </label>
          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">  Tiempo de Prueba del ensayo Ion Cloruro:</label>
          <input className="form-control form-control-sm" id="elasticidad" onChange={e => setTiempoDePrueba(e.target.value)} type="number" min='1' max='999' placeholder="" aria-label=""></input>
          </div>

          <label className="col-md-3 control-label">
            Fibra:
            <select onChange={e => setFibra(e.target.value)} className="form-select form-select-sm" name="idFibraConcre">
              <option value="">Selecciona...</option>
              {listarFibraConcre.map((value, index) => (
                <option key={index} value={value.idFibraCon}>
                  {value.Fibras}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div className="card-footer ">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="keyword" className="form-label">
              Palabras Clave:
            </label>
            <textarea id="keyword" onChange={e => setPalabrasClave(e.target.value)} className="form-control" rows="2"></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="comentarios" className="form-label">
              Comentarios:
            </label>
            <textarea
              className="form-control"
              id="comentarios"
              row="3"
              onChange={e => setComentarios(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-5" onClick={crearDatosDeMateriales}>
          Registrar
        </button>
      </div>
    </div>
  );
}

export { VistaParcial };
