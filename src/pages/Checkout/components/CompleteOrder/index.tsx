import {
  ButtonRemove,
  Card,
  CardsContainer,
  CompleteOrderButton,
  CompleteOrderContainer,
  Counter,
  MainContainer,
  TotalContainer,
} from './styles'

import { TrashIcon } from '@phosphor-icons/react'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function CompleteOrder() {
  const { cartItems, removeFromCart, decrementQuantity, incrementQuantity } =
    useContext(CartContext)
  const totalItems = cartItems.reduce((acc, item) => {
    return acc + item.priceInCents * item.quantity
  }, 0)
  const deliveryFee = 350 // Example delivery fee in cents
  const total = totalItems + deliveryFee
  const formattedDeliveryFee = (deliveryFee / 100).toFixed(2)
  const formattedTotalItems = (totalItems / 100).toFixed(2)
  const formattedTotal = (total / 100).toFixed(2)

  return (
    <CompleteOrderContainer>
      <h2>Cafés selecionados</h2>
      <MainContainer>
        <CardsContainer>
          {cartItems.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <div>
                  <p>{item.name}</p>
                  <div>
                    <Counter>
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        type="button"
                      >
                        -
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        type="button"
                      >
                        +
                      </button>
                    </Counter>
                    <ButtonRemove
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <TrashIcon size={14} />
                      Remover
                    </ButtonRemove>
                  </div>
                </div>
                <div>
                  <p>R$ {(item.priceInCents / 100).toFixed(2)}</p>
                </div>
              </div>
            </Card>
          ))}
          {/* <Card>
            <img src={americano} alt="" />
            <div>
              <div>
                <p>Expresso Tradicional</p>
                <div>
                  <Counter>
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                  </Counter>
                  <ButtonRemove type="button">
                    <TrashIcon size={14} />
                    Remover
                  </ButtonRemove>
                </div>
              </div>
              <div>
                <p>R$ 9,90</p>
              </div>
            </div>
          </Card> */}
        </CardsContainer>
        <TotalContainer>
          <div>
            <p>Total de itens</p>
            <p>R$ {formattedTotalItems}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ {formattedDeliveryFee}</p>
          </div>
          <div>
            <h3>Total</h3>
            <p>R$ {formattedTotal}</p>
          </div>
        </TotalContainer>
        <CompleteOrderButton type="submit">
          Confirmar pedido
        </CompleteOrderButton>
      </MainContainer>
    </CompleteOrderContainer>
  )
}
