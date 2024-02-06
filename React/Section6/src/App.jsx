import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewHeader from "./components/NewHeader.jsx";

export default function App() {
  return (
    <>
      <NewHeader />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
