import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="desciption">
        <h4>About</h4>
        <p>
          This App is designed so that you can browse the different weapon
          aesthetics that the game Valorant has.
        </p>
        <p>
          On Valorant's official{" "}
          <a href="https://playvalorant.com/en-us/arsenal/">website</a>, there
          is a list of all the weapons but there isn't a way to browse weapon
          skins.
        </p>
        <p>
          Currently to check weapon Aesthetics, one would have to either launch
          the game and go into the store, or look up youtube videos on the
          weapon.
        </p>
        <p>So feel free to use this website to browse all the skins!</p>
      </div>
      <div className="update">
        <h4>Coming Soon</h4>
        <ul>
          <li>Weapon Color Variants, (if the weapon skin has them)</li>
          <li>Weapon Skin Levels, (mp4 videos that display level content)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
