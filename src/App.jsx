import Layout from "src/components/Layout";
import Header from "./components/Header";
import Container from "src/components/Container";
import { benefits } from "src/data";
import Benefit from "src/components/Benefit";
function App() {
  return (
    <Layout>
      <Header />
      <main className="py-24">
        <Container className={`flex flex-col items-start gap-24`}>
          {benefits.map(({ title, content, imgSrc }, i) => (
            <Benefit key={i} title={title} content={content} imgSrc={imgSrc} />
          ))}
        </Container>
      </main>
    </Layout>
  );
}

export default App;
