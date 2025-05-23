import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinLineIcon,
  MoneyIcon,
} from '@phosphor-icons/react'
import {
  CompleteOrderFormContainer,
  FormContainer,
  HeaderFormContainer,
  Input,
  InputContainer,
  InputPayment,
} from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <h2>Complete seu pedido</h2>
      <form>
        <FormContainer>
          <HeaderFormContainer>
            <span>
              <MapPinLineIcon size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderFormContainer>

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
        </FormContainer>
        <FormContainer>
          <HeaderFormContainer>
            <span>
              <CurrencyDollarIcon size={22} />
            </span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderFormContainer>

          <InputContainer>
            <InputPayment htmlFor="credit-card">
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                value="credit-card"
              />
              <CreditCardIcon size={16} />
              Cartão de Crédito
            </InputPayment>
            <InputPayment htmlFor="debit-card">
              <input
                type="radio"
                id="debit-card"
                name="payment-method"
                value="debit-card"
              />
              <BankIcon size={16} />
              Cartão de Débito
            </InputPayment>
            <InputPayment htmlFor="money">
              <input
                type="radio"
                id="money"
                name="payment-method"
                value="money"
              />
              <MoneyIcon size={16} />
              Dinheiro
            </InputPayment>
          </InputContainer>
        </FormContainer>
      </form>
    </CompleteOrderFormContainer>
  )
}
