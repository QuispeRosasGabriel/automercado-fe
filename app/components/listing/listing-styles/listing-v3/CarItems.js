import listingCar from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const CarItems = ({ vehicles = [] }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push("/vehiculo/" + id);
  };

  return (
    <>
      {vehicles.map((car) => {
        return (
          <div
            className="col-sm-6 col-xl-4"
            key={car._id}
            onClick={() => handleClick(car._id)}
          >
            <div className="car-listing">
              <div className="thumb">
                {car.featured ? (
                  <>
                    <div className="tag">FEATURED</div>
                  </>
                ) : undefined}
                {!car.featured ? (
                  <>
                    <div className="tag blue">SPECIAL</div>
                  </>
                ) : undefined}

                <Image
                  width={284}
                  height={183}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                  src={
                    car.images[0]?.url ||
                    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                  }
                  alt={`${car.brand}-${car.model}-${car.id}`}
                />
                <div className="thmb_cntnt2">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a className="text-white" href="#">
                        <span className="flaticon-photo-camera mr3" />{" "}
                        {car.photosCount}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white" href="#">
                        <span className="flaticon-play-button mr3" />{" "}
                        {car.videosCount}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="thmb_cntnt3">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-shuffle-arrows" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="details">
                <div className="wrapper">
                  <h5 className="price">US$ {car.price}</h5>
                  <h6 className="title">
                    <Link href="/listing-single-v1">{`${car.brand} ${car.model}`}</Link>
                  </h6>
                  <div className="listign_review">
                    <ul className="mb0">
                      {[...Array(5)].map((_, index) => (
                        <li key={index} className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                      ))}
                      <li className="list-inline-item">
                        <a href="#">{car.rating}</a>
                      </li>
                      <li className="list-inline-item">
                        ({car.reviewsCount} reviews)
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End wrapper */}

                <div className="listing_footer">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <span className="flaticon-road-perspective me-2" />
                      {car.mileage}
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-gas-station me-2" />
                      {car.fuelType}
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-gear me-2" />
                      {car.transmission}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CarItems;
