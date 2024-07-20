import { Helmet } from "react-helmet-async";
import Container from "../components/Container";

const Cart = () => {
  return (
    <Container>
      <Helmet>
        <title>Cart - MechKeyMart</title>
      </Helmet>
      <div className="w-full min-h-[50vh] flex justify-center items-center">
        <h2 className="text-2xl font-semibold">Cart Page will Made Soon</h2>
      </div>
    </Container>
  );
};

export default Cart;
