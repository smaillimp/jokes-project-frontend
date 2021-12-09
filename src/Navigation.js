import { Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <Link to="/">Random</Link>
        <Link to="/by-category">ByCategory</Link>
        <Link to="/by-search">BySearch</Link>
        <Link to="/popular">Popular</Link>
    </nav>
);

export default Navigation;
