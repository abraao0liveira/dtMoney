import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo-ignite.svg';
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="LogoIgnite" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay />

              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    )
  }
