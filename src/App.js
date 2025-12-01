import "./styles.css";
import Header from "./Components/Header";
import { playersData } from "./Components/PlayersData";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="mt-5">
          <div className="row">
            <div className="col-md-12">
              <img
                src="https://placehold.co/600x400?text=Player+Smilimg"
                alt="Playerr cover image"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Players</h1>
              <p>
                Meet our most hardworking Players , who achieve to much
                achievement
              </p>
              <Link className="btn btn-primary" to="/players">
                Our Players
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1>Team Performance</h1>
              <p>
                Meet our most hardworking Players , who achieve to much
                achievement
              </p>
              <Link className="btn btn-primary" to="/report">
                View Performance
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
