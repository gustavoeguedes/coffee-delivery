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
  const { cartItems, removeFromCart } = useContext(CartContext)

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
                      <button>-</button>
                      <input type="number" value={item.quantity} readOnly />
                      <button>+</button>
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
            <p>R$ 9,90</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <h3>Total</h3>
            <p>R$ 13,40</p>
          </div>
        </TotalContainer>
        <CompleteOrderButton type="submit">
          Confirmar pedido
        </CompleteOrderButton>
      </MainContainer>
    </CompleteOrderContainer>
  )
}
