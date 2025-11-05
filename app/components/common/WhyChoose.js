const WhyChoose = () => {
  const reasons = [
    {
      iconClass: "flaticon-price-tag",
      title: "Mejores Precios",
      description:
       "Tenemos los mejores precios del mercado, diferentes costos y planes para todos.",
      delay: 100,
      style: "style1",
    },
    {
      iconClass: "flaticon-car",
      title: "Preferido Por Muchos",
      description:
        "Nuestros clientes nos prefieren. Confianza, seguridad y precios competitivos.",
      delay: 200,
      style: "style2",
    },
    {
      iconClass: "flaticon-trust",
      title: "Gran Variedad De Vehiculos",
      description:
        "Podras encontrar una gran variedad de vehiculos de todo tipo.",
      delay: 300,
      style: "style3",
    },
  ];

  return (
    <>
      {reasons.map((reason, index) => (
        <div
          className="col-sm-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={reason.delay}
          key={index}
        >
          <div className="why_chose_us home7_style">
            <div className={`icon ${reason.style}`}>
              <span className={reason.iconClass} />
            </div>
            <div className="details">
              <h5 className="title">{reason.title}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
