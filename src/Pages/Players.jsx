import Header from "../Components/Header";
import { playersData } from "../Components/PlayersData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../Components/Footer";

const Players = () => {
  const [team, setFilterTeam] = useState("All-Team");

  const filteredPlayers =
    team === "All-Team"
      ? playersData
      : playersData.filter((ply) => ply.team === team);

  return (
    <>
      <Header />
      <main className="py-4 container">
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <h1 className="mb-0">List of Players</h1>
          </div>
          <div className="col-md-4 text-md-end">
            <label htmlFor="selectPlayer" className="form-label me-2">
              Filter By Team
            </label>
            <select
              id="selectPlayer"
              className="form-select"
              onChange={(e) => setFilterTeam(e.target.value)}
            >
              <option value="All-Team">All</option>
              <option value="Paris Saint-Germain">Paris Saint-Germain</option>
              <option value="Bayern Munich">Bayern Munich</option>
              <option value="Manchester United">Manchester United</option>
              <option value="Barcelona">Barcelona</option>
            </select>
          </div>
        </div>

        <div className="row">
          {filteredPlayers.map((p) => (
            <div className="col-md-12 mb-3" key={p.id}>
              <div className="list-group-item p-3">
                <h3>{p.name}</h3>
                <p className="mb-2">
                  {p.position} - {p.team}
                </p>
                <Link className="btn btn-primary" to={`/players/${p.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Players;
