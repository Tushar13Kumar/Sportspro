import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { playersData } from "../Components/PlayersData";
import React from "react";
const PlayerDetails = () => {
  const { playerId } = useParams();
  const player = playersData.find((pl) => pl.id == playerId);
  console.log(player);
  return (
    <>
      <Header />
      <main className="container">
        <section className="mt-4 container">
          <div className="row">
            <div className="col">
              {player && (
                <>
                  <h2>{player.name} </h2>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Name</strong> {player.name}
                    </li>
                  </ul>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Position</strong> {player.position}
                    </li>
                  </ul>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Team</strong> {player.team}
                    </li>
                  </ul>{" "}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default PlayerDetails;
