import "../../style.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>{/* <img alt="profile pic">Profile Pic</img> */}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Tech Specs</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <p>Copright 2022</p>
    </nav>
  );
};
