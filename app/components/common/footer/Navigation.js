import Link from "next/link";

const Navigation = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Sobre Nosotros", path: "/about-us" },
    { label: "Vehiculos", path: "/listing-v1" },
    { label: "Blog", path: "/blog" },
    { label: "Usuario", path: "/user-profile" },
    { label: "Servicios", path: "/service" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <li className="list-inline-item" key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </>
  );
};

export default Navigation;
