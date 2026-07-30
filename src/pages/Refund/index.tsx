import PolicyPage from "../../components/common/PolicyPage";
import { REFUND_CONTACT_DATA, REFUND_HEADER_DATA, REFUND_SECTIONS } from "../../data/refund/refund.data";

const Refund = () => (
  <PolicyPage header={REFUND_HEADER_DATA} sections={REFUND_SECTIONS} contact={REFUND_CONTACT_DATA} />
);

export default Refund;
