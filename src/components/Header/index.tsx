import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo-ignite.svg';

export function Header() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="LogoIgnite" />

          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    )
  }