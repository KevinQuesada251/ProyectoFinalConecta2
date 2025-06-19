function FormContacto() {
  return (
    <div className="w-75 px-3 rounded mx-auto"  style={{ background: '#12229D' }}>
      <h1 className="text-white">Contacto</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormContacto;