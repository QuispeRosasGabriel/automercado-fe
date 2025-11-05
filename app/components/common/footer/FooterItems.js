const FooterItems = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget">
          <h5 className="title">Oficina</h5>
          <p>
            San Isidro,
            Lima,
            Peru
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">Soporte</h5>
          <div className="footer_phone">+51 999 999 999</div>
          <p>hello@automercado.pe</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">Horario de atencion</h5>
          <p>
            Lunes – Viernes: 09:00AM – 06:00PM
            <br />
            {/* Saturday: 09:00AM – 07:00PM */}
            {/* <br /> */}
            {/* Sunday: Closed */}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">Suscribete</h5>
          <form className="footer_mailchimp_form">
            <div className="wrapper">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo..."
                  required
                />
                <button type="submit">ok</button>
              </div>
            </div>
          </form>
          <p>Obten las ultimas novedades.</p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterItems;
