import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

// Todo componente/interface começa com letra maiúscula
// 1 Componente só retorna no máximo 1 elemento
// Por isso, criamos uma div container

// Se eu exportar default posso utilizar qualquer nome na importação
// Se eu NÃO exportar default, eu PRECISO importar entre {}
export function Details() {
  // Podemos ter funções aqui

  return (
    <Container>
      <Header />

        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias error, repellendus adipisci explicabo pariatur inventore quia sapiente perspiciatis eius eveniet culpa ipsa incidunt cumque, consequuntur cupiditate aut commodi, amet laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus vero qui reiciendis molestias obcaecati animi dolor perferendis deleniti fugiat aspernatur atque rem officia, eum quos accusantium corrupti tenetur numquam.</p>

            <Section title="Links úteis">
              <Links>
                <li>
                  <a href="#">https://www.rocketseat.com.br</a>
                </li>
                <li>
                  <a href="#">https://www.rocketseat.com.br</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="Node" />
            </Section>

            <Button title="Voltar" />
          </Content>
        </main>
    </Container>
  );
}

/* 
** Os dois tem a mesma finalidade só que o segundo é a forma reduzida 

import { Fragment } from "react";
export function Fragment__() {

  return (
    <Fragment>
      <h1>Hello World</h1>
      <span>Joacir Sampaio</span>
    </Fragment>
  );
}

export function Fragment_() {

  return (
    <>
      <h1>Hello World</h1>
      <span>Joacir Sampaio</span>
    </>
  );
}
 */
