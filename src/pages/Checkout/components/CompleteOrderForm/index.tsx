import {
  CurrencyDollarIcon,
  MapPinLineIcon,
  MoneyIcon,
} from '@phosphor-icons/react'
import { CompleteOrderFormContainer, Input, InputContainer } from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <h2>Complete seu pedido</h2>
      <form>
        <div>
          <header>
            <span>
              <MapPinLineIcon size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <InputContainer>
            <Input size="fifth" type="text" placeholder="CEP" />
          </InputContainer>
          <InputContainer>
            <Input size="full" type="text" placeholder="Rua" />
          </InputContainer>
          <InputContainer>
            <Input type="text" size="fifth" placeholder="Número" />
            <Input size="eighty" type="text" placeholder="Complemento" />
          </InputContainer>
          <InputContainer>
            <Input size="third" type="text" placeholder="Bairro" />
            <Input size="third" type="text" placeholder="Cidade" />
            <Input size="fifth" type="text" placeholder="UF" />
          </InputContainer>
        </div>
        <div>
          <header>
            <span>
              <CurrencyDollarIcon size={22} />
            </span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <InputContainer></InputContainer>
        </div>
      </form>
    </CompleteOrderFormContainer>
  )
}
