const ChangePassword = () => {
  return (
    <form>
      <div className="col-sm-6 col-lg-7">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Contrasena"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6 col-lg-7">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control"
            type="text"
            placeholder="Nueva Contrasena"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6 col-lg-7">
        <div className="mb20">
          <input
            name="form_name"
            className="form-control form_control mb20"
            type="text"
            placeholder="Confirmar Nueva Contrasena"
          />
          <button type="submit" className="btn btn-thm ad_flor_btn">
            Guardar
          </button>
        </div>
      </div>
      {/* End .col-6 */}
    </form>
  );
};

export default ChangePassword;
