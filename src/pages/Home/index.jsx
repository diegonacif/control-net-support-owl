import { HomeContainer, HomeSection } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeSection>
        <h1>Quem somos</h1>
        <p>Somos uma empresa do ramo de Internet e atuamos no mercado desde junho de 2014. Acreditamos que a conectividade é a chave para o progresso e, por isso, trabalhamos arduamente para criar soluções inovadoras que atendam às demandas da era digital. Buscamos expandir nossa cobertura, estendendo nosso alcance afim de atingir cada vez mais pessoas e comunidades, democratizando o acesso à internet de qualidade. Nos comprometemos a oferecer um atendimento acolhedor, baseado na premissa de tratar nossos clientes da maneira como gostaríamos de ser tratados: com prontidão, transparência e resolutividade. Seja bem-vindo(a) à nossa empresa, onde a seriedade e a busca constante pela excelência são os pilares que sustentam nossa atuação.</p>
      </HomeSection>
      <HomeSection>
        <h1>Qual sua missão aqui</h1>
        <ul>
          <li>Conhecer mais sobre o produto</li>
          <li>Promover um ambiente de atendimento acolhedor</li>
          <li>Garantir a satisfação dos clientes</li>
        </ul>
      </HomeSection>
      <HomeSection>
        <h1>Boas condutas</h1>
        <p>Sempre que um cliente entrar em contato, ao final do atendimento você deverá registrar uma ocorrência sobre o que foi feito.</p>
        <p> A frequência com que esses aparecem é relativamente baixa, por isso pode ser que você esqueça como tem que atender eles. Mas fica aqui o lembrete:</p>
        <ul>
          <li>Não dê espaço. Se você começar a falar a mesma lingua que ele vai estar dando a ele o que ele quer e vocês vão começar uma briga sem sentido.</li>
          <li>Fale que entende, e com calma e jogo de cintura mostre com fatos que ele está errado.</li>
          <li>Se for o caso de o cliente estar certo, peça  desculpas e informe que o erro será corrigido.</li>
          <li>Não leve para o lado pessoal.</li>
          <li>Ameaçou PROCON/Órgãos de Defesa: TRANSFERIR PARA Ostuka</li>
        </ul>
      </HomeSection>
    </HomeContainer>
  )
}
