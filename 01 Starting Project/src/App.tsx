import CoarseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CoarseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CoarseGoal>
    </main>
  );
}
