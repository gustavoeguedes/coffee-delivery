import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Header, SuccessContainer, SuccessContent } from './styles'
import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon,
} from '@phosphor-icons/react'
import illustration from '../../assets/illustration.svg'

export function Success() {
  const { order } = useContext(CartContext)

  if (!order) {
    return (
      <div>Imagine aqui uma tela bem bonita dizendo que não há um ordem</div>
    )
  }

  return (
    <SuccessContainer>
      <div>
        <Header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>
        <SuccessContent>
          <div>
            <span>
              <MapPinIcon size={16} weight="fill" />
            </span>
            <p>
              Entrega em{' '}
              <strong>
                {order.street}, {order.number}
              </strong>{' '}
              <br /> {order.neighborhood} - {order.city} {order.uf}
            </p>
          </div>
          <div>
            <span>
              <TimerIcon size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega entrega <br />{' '}
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <span>
              <CurrencyDollarIcon size={16} weight="fill" />
            </span>
            <p>
              Pagamento na entrega <br /> <strong>{order.paymentMethod}</strong>
            </p>
          </div>
        </SuccessContent>
      </div>
      <div>
        <img src={illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
