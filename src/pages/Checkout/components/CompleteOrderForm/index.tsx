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
import { useFormContext } from 'react-hook-form'

export function CompleteOrderForm() {
  const { register } = useFormContext()
  return (
    <CompleteOrderFormContainer>
      <h2>Complete seu pedido</h2>
      <section>
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
            <Input
              size="fifth"
              type="text"
              placeholder="CEP"
              {...register('cep')}
            />
          </InputContainer>
          <InputContainer>
            <Input
              size="full"
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              size="fifth"
              placeholder="Número"
              {...register('number')}
            />
            <Input
              size="eighty"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputContainer>
          <InputContainer>
            <Input
              size="third"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <Input
              size="third"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <Input
              size="fifth"
              type="text"
              placeholder="UF"
              {...register('uf')}
            />
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
                name="paymentMethod"
                value="credit-card"
              />
              <CreditCardIcon size={16} />
              Cartão de Crédito
            </InputPayment>
            <InputPayment htmlFor="debit-card">
              <input
                type="radio"
                id="debit-card"
                name="paymentMethod"
                value="debit-card"
              />
              <BankIcon size={16} />
              Cartão de Débito
            </InputPayment>
            <InputPayment htmlFor="money">
              <input
                type="radio"
                id="money"
                name="paymentMethod"
                value="money"
              />
              <MoneyIcon size={16} />
              Dinheiro
            </InputPayment>
          </InputContainer>
        </FormContainer>
      </section>
    </CompleteOrderFormContainer>
  )
}
