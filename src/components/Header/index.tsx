import logoImg from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Pc Money" />
        <Button type="button"> 
          Nova Transação
        </Button>
      </Content>
    </Container>
  )
}