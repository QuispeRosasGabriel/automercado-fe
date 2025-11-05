const Descriptions = () => {
  const paragraphs = [
    {
      "className": "first-para",
      "content": "El totalmente nuevo Volvo XC60 es un SUV compacto de lujo excelente. Ha sido completamente rediseñado para 2017 e incluye mejoras en todos los aspectos. Estos cambios han elevado al vehículo de su posición media anterior a estar entre los mejores de su clase. Algunas de las mejoras más notables incluyen un sistema de infoentretenimiento de última generación, más espacio para las piernas en los asientos traseros y opciones de motor más ágiles."
    },
    {
      "className": "mb25",
      "content": "Ocupando más de 8,000 pies cuadrados y situado a más de 1,100 pies de altura, con impresionantes vistas panorámicas de 360 grados de toda la ciudad de Nueva York y el área triestatal circundante, el piso 82 de 432 Park Avenue ha sido completamente reinventado por una de las casas de diseño más solicitadas de Londres, representando una oportunidad única para poseer una propiedad de importancia global."
    },
    {
      "className": "mt10 mb20",
      "content": "El Amrutha Lounge significa 'puerto' en turco, sin embargo, el restaurante abre sus puertas a todos los aspectos de la cocina mediterránea. Su cocina estará enfocada principalmente en la gastronomía mediterránea; los propietarios del restaurante son jóvenes chefs profesionales que pueden aportar nuevos y emocionantes sabores a Angel, Islington, lo cual se reflejará en la calidad de los platos que preparan."
    }
  ];

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p className={paragraph.className} key={index}>
          {paragraph.content}
        </p>
      ))}
    </>
  );
};

export default Descriptions;
