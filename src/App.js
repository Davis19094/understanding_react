
import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
  console.log();
  return (
    <header><h1> {props.name}' kitchen</h1></header>
  );
}

function Main(props) {

  return (
    <section>
      <img src={restaurant} alt='restaurant food' height={200} />
      <h2>Serves {props.adjective} delicious food
      </h2>
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (<li>{dish}</li>))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer><p>Copyright {props.year}</p></footer>
  );
}

const dishes = [
  "marccolne and cheese",
  "salmon",
  "Tofu with vegetables"
];
dishes.map((dish) => console.log(dish));
function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="nice" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />

    </div>
  );
}

export default App;
