import { ShoppingCartIcon } from '@phosphor-icons/react'
import {
  Badge,
  BadgeContainer,
  Counter,
  ShoppingCartButton,
  CoffeeCard,
} from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface Coffee {
  id: number
  name: string
  flags: string[]
  description: string
  priceInCents: number
  image: string
}
interface CooffeeCardProps {
  coffee: Coffee
}

const coffeeSchema = z.object({
  quantity: z.number().min(1).max(99),
})

type coffeeData = z.infer<typeof coffeeSchema>

export function Card({ coffee }: CooffeeCardProps) {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<coffeeData>({
      defaultValues: {
        quantity: 1,
      },
    })

  const quantity = watch('quantity') // valor atual do input

  const increment = () => {
    if (quantity < 99) {
      setValue('quantity', quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setValue('quantity', quantity - 1)
    }
  }

  const onSubmit = (data: coffeeData) => {
    reset()
    console.log(data)
  }

  return (
    <CoffeeCard>
      <img src={coffee.image} alt="" />

      <BadgeContainer>
        {coffee.flags.map((flag) => (
          <Badge key={flag}>{flag}</Badge>
        ))}
      </BadgeContainer>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            R$ <span>{(coffee.priceInCents / 100).toFixed(2)}</span>
          </p>
        </div>
        <Counter>
          <button type="button" onClick={decrement}>
            -
          </button>
          <input
            type="number"
            min={1}
            max={99}
            {...register('quantity', { valueAsNumber: true })}
          />
          <button type="button" onClick={increment}>
            +
          </button>
        </Counter>
        <ShoppingCartButton type="submit">
          <ShoppingCartIcon size={22} weight="fill" />
        </ShoppingCartButton>
      </form>
    </CoffeeCard>
  )
}
