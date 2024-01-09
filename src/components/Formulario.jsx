import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/index.css";
import { registerDocument } from "../lib/Api";
import {toast} from "react-toastify";
import { useAuth } from '../autentication/AuthContext';
import { format } from "date-fns";
import DatePicker from "react-datepicker";  // Importar react-datepicker
import "react-datepicker/dist/react-datepicker.css"; 


const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAuthenticated, user, logout } = useAuth();

  const redireccion= useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const formData = new FormData();
      formData.append("nombre", values.nombre);
      formData.append("fechaRadicacion", values.fechaRadicacion);
      formData.append("dependencia", values.dependencia);
      formData.append("asunto", values.asunto);
      formData.append("documentoPDF", values.documentoPDF[0]);

      const submit = await registerDocument(formData);
      
      /*const formattedDate = format(new Date(values.fechaRadicacion), "yyyy-MM-dd");
      formData.append("fechaRadicacion", formattedDate); //combierte el formato de fecha que se ingrese en el formato que requiere Mysql*/
  
      if (submit) {
        
        toast.success('Documento Registrado Exitosamente');
        redireccion("/menu");
      } else {
        console.log("algo salio mal", errors);
        toast.error('Error al registrar su solicitud');
      }
    } catch (error) {
      console.log("Se produjo un error al registrar la solicitud", error);
      toast.error('Algo salio mal, estamos en el catch');
    }
  });
  

  return (
    <div className="container1">
      <h2 className="titulo2">{user.nombre}: Radica tu solicitud</h2>
      <div className="containerf">
      <form className="form1" onSubmit={onSubmit}>
        <label className="titulo1" htmlFor="nombre">Nombre de Usuario</label>
        <input className="input1"
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido",
            },
          })}
        />
        {errors.nombre && (
          <span>{errors.nombre.message}</span>
        )} <br />
         
         <label className="titulo1" htmlFor="dependencia">Dependencia</label>
         <select className="select1" {...register("dependencia", { required: true })}>
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
        )} <br />

        <label className="titulo1" htmlFor="fechaRadicacion">Fecha de Radicación</label>
        <DatePicker
            className="input1" // Puedes personalizar los estilos según tus necesidades
            {...register("fechaRadicacion", {
              required: {
                value: true,
                message: "La fecha de solicitud es requerida",
              },
            })}
            selected={new Date()} // Puedes configurar la fecha inicial si es necesario
          />
          {errors.fechaRadicacion && (
            <span>{errors.fechaRadicacion.message}</span>
          )} <br />
        <label className="titulo1" htmlFor="asunto">Asunto</label>
        <textarea className="textarea1"
          {...register("asunto", {
            required: {
              value: true,
              message: "El asunto es requerida",
            },
          })}
        />
        {errors.descripcion && (
          <span>{errors.asunto.message}</span>
        )} <br />

        <label className="titulo1" htmlFor="documentoPDF">Adjuntar Documento (PDF)</label>
        <input className="input1"
          type="file"
          accept=".pdf"
          {...register("documentoPDF", {
            required: {
              value: true,
              message: "Por favor, adjunta un documento PDF",
            },
          })}
        />
        {errors.adjuntarDocumento && (
          <span>{errors.adjuntarDocumento.message}</span>
        )} <br /><br />

<button className="boton1" type="submit">Radicar</button>
<br />
<button className="boton1" onClick={() => redireccion("/menu")}>Volver</button>

      </form>
      </div>  
   
    </div>
  );
};

export default Formulario;
