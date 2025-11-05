import Home_1 from "./(home)/home-1/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Home || Automercado.pe",
  description: `Automercado - consigue tu auto ideal `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_1 />
    </Wrapper>
  );
}
