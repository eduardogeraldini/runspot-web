import { Cards } from "./_components/Cards";
import { Container } from "./_components/Container";
import { Faq } from "./_components/Faq";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { SectionTitle } from "./_components/SectionTitle";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle preTitle="Eventos" title="Veja os eventos disponíveis">
       Utilize os filtros para refinar sua busca e encontrar corridas que sejam ideais para você.
      </SectionTitle>

      <Cards />

      <SectionTitle preTitle="FAQ" title="Perguntas frequentes">
        Aqui você encontrará informações sobre como usar a aplicação, como encontrar e se inscrever em corridas de rua, e detalhes sobre as funcionalidades oferecidas. 
      </SectionTitle>

      <Faq />

      <Footer />
    </Container>
  );
}
