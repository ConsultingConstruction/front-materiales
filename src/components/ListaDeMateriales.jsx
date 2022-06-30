import React from "react";
import { TableContext } from "../Context/TableContext";
import { RiFileEditFill } from "react-icons/ri";
import { Estructura } from "./Estructura";
import "./TableApi.css";
function ListaDeMateriales() {
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
    setDatosModal,
    listarConcretosMateriales,
  } = React.useContext(TableContext);

  const [estructura, setEstructura] = React.useState(false);

  return (
    <div className="container vh-100">
      <h2 className="h1 text-center">LISTA DE MATERIALES/PRODUCTOS</h2>
      <br />
      <h2 className="h2">Selecciona una clasificación</h2>
      <div className="row text-center">
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Acondicionamiento del terreno
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Cimientos</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span
            className="btn btn-sm btn-dark fw-bold"
            onClick={() => setEstructura(!estructura)}
          >
            Estructuras
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Fachadas y muros divisorios
          </span>
        </div>
      </div>
      <div className="row text-center">
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Remates y ayudas</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Firmes y pavimentos urbanos
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Instalaciones</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Equipamiento urbano
          </span>
        </div>
      </div>
      {estructura && <Estructura />}
      <br />
      <div className="row justify-content-between">
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Clase</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">TMA</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Valor del Esfuerzo</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Esfuerzo</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Resistencia</option>
          </select>
        </div>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Codigo</th>
            <th>Descripción corta</th>
            <th></th>
            <th>Valor del esfuerza</th>
            <th></th>
            <th>Tipo de resitencia</th>
            <th></th>
            <th>VAlor del TMA</th>
            <th></th>
            <th>VAlor del revenimiento</th>
            <th></th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {listarConcretosMateriales.map((item, index) => (
            <tr key={index}>
              <td>{item.Consecutivo}</td>
              <td>{item.CodigoOmc23}</td>
              <td></td>
              <td>{item.SiglaEsf}</td>
              <td>{item.ValorEsfuerzo}</td>
              <td>{item.Unidadval}</td>
              <td>{item.TipoResistencia}</td>
              <td>{item.SiglaTma}</td>
              <td>{item.valTma}</td>
              <td>{item.SiglaRev}</td>
              <td>{item.valRev}</td>
              <td>{item.Unidad}</td>
              <td>
                <RiFileEditFill className="trash" />
              </td>
            </tr>
          ))}
          <tr className="seleccion">
            <td>1</td>
            <td>23-133113-00001</td>
            <td></td>
            <td>f`c</td>
            <td>350</td>
            <td>kg/cm2</td>
            <td>Resistencia normal</td>
            <td>TMA</td>
            <td>20</td>
            <td>rev</td>
            <td>120</td>
            <td>mm</td>
            <td>
              <RiFileEditFill className="trash" />
            </td>
          </tr>
          <tr className="seleccion">
            <td>2</td>
            <td>23-133113-00002</td>
            <td></td>
            <td>f`c</td>
            <td>350</td>
            <td>kg/cm2</td>
            <td>Resistencia normal</td>
            <td>TMA</td>
            <td>20</td>
            <td>rev</td>
            <td>120</td>
            <td>mm</td>
            <td>
              <RiFileEditFill className="trash" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row justify-content-between">
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Densidad</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Densidad</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de consistencia</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Flujo de revenimiento</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Valor de revenimiento</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Fibra</option>
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Relación agua cemento</option>
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Categoria de exposición</option>
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Sistema de colocación</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export { ListaDeMateriales };
