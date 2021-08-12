import MainContent from "./components/MainContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <MainContent />
      <PageFooter />
      <p>This is a random change</p>
    </>
  );
}

export default App;
