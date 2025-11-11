"use client";
import Image from "next/image";

const SellerDetail = ({ seller }) => {
  if (!seller) return null;

  return (
    <div className="d-flex align-items-center mb30">
      <div className="flex-shrink-0">
        <Image
          width={60}
          height={60}
          className="mr-3 author_img w60"
          src="/images/team/seller.png"
          alt={`${seller.firstName} ${seller.lastName}`}
        />
      </div>

      <div className="flex-grow-1 ms-3">
        <h5 className="mt0 mb5 fz16 heading-color fw600">
          {seller.firstName} {seller.lastName}
        </h5>
        <p className="mb0 tdu">
          <span className="flaticon-phone-call pr5 vam" />
          {seller.phone || "Sin número disponible"}
        </p>
        <p className="mb0 fz14 text-muted">{seller.email}</p>
      </div>
    </div>
  );

  /* 🔸 Código original (comentado para que veas qué se reemplazó)

  return (
    <div className="d-flex align-items-center mb30">
      <div className="flex-shrink-0">
        <Image
          width={60}
          height={60}
          className="mr-3 author_img w60"
          src="/images/team/seller.png"
          alt="author.png"
        />
      </div>

      <div className="flex-grow-1 ms-3">
        <h5 className="mt0 mb5 fz16 heading-color fw600">
          Volvo Cars Istanbul
        </h5>
        <p className="mb0 tdu">
          <span className="flaticon-phone-call pr5 vam" />
          (302) 555-0107
        </p>
      </div>
    </div>
  );
  */
};

export default SellerDetail;
