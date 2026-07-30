import PolicyPage from "../../components/common/PolicyPage";
import { SHIPPING_CONTACT_DATA, SHIPPING_HEADER_DATA, SHIPPING_SECTIONS } from "../../data/shipping/shipping.data";

const Shipping = () => (
  <PolicyPage header={SHIPPING_HEADER_DATA} sections={SHIPPING_SECTIONS} contact={SHIPPING_CONTACT_DATA} />
);

export default Shipping;
