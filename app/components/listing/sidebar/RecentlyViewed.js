import Image from "next/image";
import Link from "next/link";

const RecentlyViewed = ({ recentVehicles }) => {
  if (!recentVehicles || recentVehicles.length === 0) {
    return <p>No has visto vehículos recientemente.</p>;
  }
  return (
    <>
      {recentVehicles.map((car, index) => (
        <Link
          href={`/listing-single-v1?id=${car._id}`}
          className="d-flex mb20"
          key={car._id}
        >
          <div className="flex-shrink-0">
            <Image
              width={90}
              height={80}
              className="align-self-start mr-3"
              src={
                car.images?.[0]?.url ||
                "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              }
              alt={car.brand}
            />
          </div>

          <div className="flex-grow-1 ms-3">
            <h5 className="post_title">${car.price}</h5>
            <p>
              {car.brand} {car.model}
            </p>
            <p>{car.year}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecentlyViewed;
