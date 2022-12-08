import { Container } from "./styles";

// Atraves de props podemos acessar o titulo dos botoes, podemos tambem desestruturar
// 1º export function Button(props) || export function Button({ title })
export function Button({title, loading = false, ...rest}) {
  return(
    <Container 
      type="button"
      disabled={ loading }
      {...rest} // recebe todas as outras props de um button
    >
      { loading ? 'Carregando...' : title }
    </Container>
  );
}