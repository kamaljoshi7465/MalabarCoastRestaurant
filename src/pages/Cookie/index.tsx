import PolicyPage from "../../components/common/PolicyPage";
import { COOKIE_CONTACT_DATA, COOKIE_HEADER_DATA, COOKIE_SECTIONS } from "../../data/cookie/cookie.data";

const Cookie = () => (
  <PolicyPage header={COOKIE_HEADER_DATA} sections={COOKIE_SECTIONS} contact={COOKIE_CONTACT_DATA} />
);

export default Cookie;
