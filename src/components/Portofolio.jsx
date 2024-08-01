import "../style/Portofolio.css";
import potofolioCardData from "../data/portofolio";
export default function Portofolio() {
  return (
    <div className="portofolio" id="portofolio">
      <div className="container">
        <h2 className="special-heading">Portofolio</h2>
        <p>If you did it right, it will last forever.</p>
        <div className="portofolio-content">
          {potofolioCardData.map((port) => (
            <div className="card" key={port.id}>
              <img src={port.image} alt="" />
              <div className="info">
                <h3>{port.title}</h3>
                <p>{port.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
