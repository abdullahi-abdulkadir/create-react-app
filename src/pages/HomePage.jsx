import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";

function HomePage() {
  return (
    //fragment is used here to group multiple components without adding extra nodes to the DOM
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default HomePage;