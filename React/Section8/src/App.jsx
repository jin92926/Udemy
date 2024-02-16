import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TImerChallenge.jsx";

const list = [
  { title: "Easy", targetTime: 1 },
  { title: "Not easy", targetTime: 5 },
  { title: "Getting tough", targetTime: 10 },
  { title: "Pros only", targetTime: 15 },
];

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/* <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} /> */}

        {list.map((el, idx) => (
          <TimerChallenge
            title={el.title}
            targetTime={el.targetTime}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}

export default App;
