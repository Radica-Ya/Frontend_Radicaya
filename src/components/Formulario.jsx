import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/index.css";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor, etc.
  });

  return (
    <div className="container1">
      <h2 className="titulo1">Solicitud de Documento</h2>
      <div className="containerf">
      <form className="form1" onSubmit={onSubmit}>
        <label className="label1" htmlFor="nombreUsuario">Nombre de Usuario</label>
        <input className="input1"
          type="text"
          {...register("nombreUsuario", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido",
            },
          })}
        />
        {errors.nombreUsuario && (
          <span>{errors.nombreUsuario.message}</span>
        )}
         
         <label className="label1" htmlFor="dependenciaResponsable">Dependencia Responsable</label>
         <select className="select1" {...register("dependenciaResponsable", { required: true })}>
            <option value="1">Hacienda Municipal</option>
            <option value="2">Planeación y Desarrollo Urbano</option>
            <option value="3">Obras Públicas</option>
            <option value="4">Educación y Cultura</option>
            <option value="5">Salud Pública</option>
            <option value="6">Seguridad Ciudadana</option>
            <option value="7">Medio Ambiente</option>
            <option value="8">Tránsito y Transporte</option>
        </select>
        {errors.dependenciaResponsable && (
            <span>{errors.dependenciaResponsable.message}</span>
        )}
         
        <label className="label1" htmlFor="nombreDocumento">Nombre del Documento</label>
        <input className="input1"
          type="text"
          {...register("nombreDocumento", {
            required: {
              value: true,
              message: "El nombre del documento es requerido",
            },
          })}
        />
        {errors.nombreDocumento && (
          <span>{errors.nombreDocumento.message}</span>
        )}

        <label className="label1" htmlFor="fechaSolicitud">Fecha de Solicitud</label>
        <input className="input1"
          type="text"
          {...register("fechaSolicitud", {
            required: {
              value: true,
              message: "La fecha de solicitud es requerida",
            },
          })}
        />
        {errors.fechaSolicitud && (
          <span>{errors.fechaSolicitud.message}</span>
        )}

        <label className="label1" htmlFor="descripcion">Descripción</label>
        <textarea className="textarea1"
          {...register("descripcion", {
            required: {
              value: true,
              message: "La descripción es requerida",
            },
          })}
        />
        {errors.descripcion && (
          <span>{errors.descripcion.message}</span>
        )}

        <label className="label1" htmlFor="prioridad">Prioridad</label>
        <select {...register("prioridad")}>
          <option value="1">Alta</option>
          <option value="2">Media</option>
          <option value="3">Baja</option>
        </select>

        <label className="label1" htmlFor="adjuntarDocumento">Adjuntar Documento (PDF)</label>
        <input className="input1"
          type="file"
          accept=".pdf"
          {...register("adjuntarDocumento", {
            required: {
              value: true,
              message: "Por favor, adjunta un documento PDF",
            },
          })}
        />
        {errors.adjuntarDocumento && (
          <span>{errors.adjuntarDocumento.message}</span>
        )}

<button className="boton1" type="submit">Radicar</button>
<button className="boton1" type="button" onClick={() => alert("Implementa tu lógica de volver aquí")}>
  Volver
</button>

      </form>
      </div>  
   
    </div>
  );
};

export default Formulario;
