import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Report = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Team Performance Report</h1>
        <hr />
        <div className="row text-centre">
          <div className="col">
            <h1>Top scrore</h1>
            <p>Name: Lionel Messi</p>
            <p>Goal: 25</p>
          </div>
          <div className="col">
            <h1>Best Assistor</h1>
            <p>Name: Neymar Jr</p>
            <p>Assit: 15</p>
          </div>
          <div className="col">
            <h1>Most Valuable Player(MVP)</h1>
            <p>Name: Cristiano Ronaldo</p>
            <p>Overall Rating: 9</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Report;
