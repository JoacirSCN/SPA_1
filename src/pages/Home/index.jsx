import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title='Todos' isActive /></li>
        <li><ButtonText title='FrontEnd' /></li>
        <li><ButtonText title='ReactJS' /></li>
        <li><ButtonText title='NodeJS' /></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título.' icon={FiSearch} />
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note data={{
            title: 'React', 
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'Rocketeseat' }
            ]
            }} 
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}