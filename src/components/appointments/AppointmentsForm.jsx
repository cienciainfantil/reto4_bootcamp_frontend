import { useState } from "react";
import Swal from "sweetalert2";

const AppointmentsForm = ({ appointments, setAppointments }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const [formAppointment, setFormAppointment] = useState({
    _id: '',
    name: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''
  });
  const { name, owner, date, hour, symptom } = formAppointment;

  const handleSubmit = (e) => {
    e.preventDefault();
    formAppointment._id = crypto.randomUUID();
    setAppointments([
      ...appointments,
      formAppointment
    ]);
    setFormAppointment({
      _id: '',
      name: '',
      owner: '',
      date: '',
      hour: '',
      symptom: ''
    });
    Toast.fire({
      icon: 'success',
      title: '¡Asesoria creada!'
    });
  };

  const handleInput = (e) => {
    setFormAppointment({
      ...formAppointment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Tema a revisar"
          onInput={handleInput}
          value={name}
          required
        />
        <label htmlFor="floatingInput">Curso a revisar</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="owner"
          placeholder="Nombre del Estudiante"
          onInput={handleInput}
          value={owner}
          required
        />
        <label htmlFor="floatingInput">Nombre del Estudiante</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="form-control"
          name="date"
          placeholder="Fecha de Asesoria"
          onInput={handleInput}
          value={date}
          required
        />
        <label htmlFor="floatingInput">Fecha de Asesoria</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="time"
          className="form-control"
          name="hour"
          placeholder="Hora de clase"
          onInput={handleInput}
          value={hour}
          required
        />
        <label htmlFor="floatingInput">Hora de clase</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="symptom"
          placeholder="Dificultad presentada"
          onInput={handleInput}
          value={symptom}
          required
        />
        <label htmlFor="floatino nngInput">Dificultad presentada</label>
      </div>
      <button
        type="submit"
        className="btn btn-warning w-100 fw-bold"
      >
        Agregar Nueva Asesoria
      </button>
    </form>
  );
};

export default AppointmentsForm;