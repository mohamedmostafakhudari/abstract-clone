import Layout from "src/components/Layout";
import Header from "./components/Header";
import Container from "src/components/Container";
import { benefits } from "src/data";
import Benefit from "src/components/Benefit";
import SearchForm from "src/components/SearchForm";
import Button from "src/components/Button";
import { BsQuestionCircle } from "react-icons/bs";
function App() {
  return (
    <Layout>
      <main className="">
        <SearchForm />
        <section className="py-24">
          <Container
            className={`grid grid-cols-1 gap-24 md:grid-cols-2 md:px-16`}
          >
            {benefits.map(({ title, content, imgSrc }, i) => (
              <Benefit
                key={i}
                title={title}
                content={content}
                imgSrc={imgSrc}
              />
            ))}
          </Container>
        </section>
        <Button
          intent="primary"
          size="small"
          className={`fixed bottom-2 right-4 flex items-center gap-2 rounded-full hover:bg-white hover:text-primary`}
          type="link"
          icon={<BsQuestionCircle />}
        >
          Help
        </Button>
      </main>
    </Layout>
  );
}

export default App;
