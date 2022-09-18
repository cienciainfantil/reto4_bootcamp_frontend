import Swal from "sweetalert2";

const AppointmentsItem = ({ appointment, deleteAppointment }) => {
  const { _id, name, owner, date, hour, symptom } = appointment;

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Tu asesoria ha sido eliminada.',
          'success'
        );
        deleteAppointment(_id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Usted mantiene su asesoria',
          'error'
        );
      }
    });
  };

  return (
    <li
      className="d-flex flex-column gap-1 list-group-item list-group-item-action animate__animated animate__fadeInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">{name}</h5>
        <small className="badge rounded-pill text-bg-success">📆 {date} I ⌛ {hour}</small>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="m-0"><span className="fw-bold">Dificultad:</span> {symptom}</p>
          <h6 className="m-0"><span className="fw-bold">Estudiante:</span> <span className="fw-normal">{owner}</span></h6>
        </div>
        <div className="d-flex gap-1">
          <a
            href={`https://wa.me/51944931018?text=Confirmo%20mi%20asesoria: Curso%20a%20revisar: ${name}, Estudiante: ${owner}, Fecha%20de%20asesoria: ${date}, Hora%20de%20clase: ${hour} Dificultad%20presentada: ${symptom}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-sm"
          >
            ✔
          </a>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              handleDelete(_id);
            }}
          >✖</button>
        </div>
      </div>
    </li>
  );
};

export default AppointmentsItem;