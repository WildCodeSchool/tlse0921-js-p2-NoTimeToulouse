/* eslint-disable jsx-a11y/label-has-associated-control */
const Footer = () => (
  <div className="footer">
    <form className="newsleter">
      <label htmlFor="email">inscris toi afin de ne rien louper</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="mail@jambon.fr"
      />
    </form>
    <div className="socialLink">
      <a
        href="http:/https://fr-fr.facebook.com/WildCodeSchool//"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174848.png"
          alt="logo facebook"
        />
      </a>
      <a href="http://" target="_blank" rel="noreferrer">
        <img
          src="https://img2.freepng.fr/20180514/gae/kisspng-github-logo-repository-computer-icons-5afa376c2582d9.9650908015263476281537.jpg"
          alt="logo gitHub"
        />
      </a>
      <a href="http://" target="_blank" rel="noreferrer">
        <img
          src="data:image/png;base64,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"
          alt="logo wild code school"
        />
      </a>
      <a href="https://twitter.com/WCS_OC" target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174876.png"
          alt="logo twitter"
        />
      </a>
    </div>
    <div className="legalMention" />
  </div>
);

export default Footer;
