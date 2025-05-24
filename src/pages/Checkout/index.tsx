import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrder } from './components/CompleteOrder'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CheckoutContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const formOrderSchema = z.object({
  cep: z.string().min(1, 'Campo obrigatório'),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  complement: z.string().nullable(),
  neighborhood: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
  uf: z.string().min(1, 'Campo obrigatório'),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

export type FormOrderData = z.infer<typeof formOrderSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cartItems, finishOrder } = useContext(CartContext)
  const methods = useForm<FormOrderData>({
    resolver: zodResolver(formOrderSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      paymentMethod: 'credit',
      street: '',
      uf: '',
    },
  })

  function onSubmit(data: FormOrderData) {
    console.log(data)
    const order = {
      id: Math.floor(Math.random() * 10000),
      ...data,
      products: cartItems,
    }
    console.log(order)
    finishOrder(order)
    navigate('/success')
  }
  const { handleSubmit } = methods

  if (cartItems.length === 0) {
    return (
      <CheckoutContainer>
        <h2>
          Imagine aqui uma tela bem bonita dizendo que seu carrinho está vazio
        </h2>
      </CheckoutContainer>
    )
  }
  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CompleteOrderForm />

        <CompleteOrder />
      </CheckoutContainer>
    </FormProvider>
  )
}
