import { ShoppingCartIcon } from '@phosphor-icons/react'
import coffee from '../../assets/coffee.svg'

export function Home() {
  return (
    <section>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <div>
            <div>
              <ShoppingCartIcon size={32} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <div>
              <ShoppingCartIcon size={32} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <div>
              <ShoppingCartIcon size={32} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <div>
              <ShoppingCartIcon size={32} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>
        </div>
      </div>
      <div>
        <img src={coffee} alt="" />
      </div>
    </section>
  )
}
