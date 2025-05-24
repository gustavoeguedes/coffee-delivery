import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrder } from './components/CompleteOrder'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CheckoutContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={handleSubmit((data) => console.log(data))}>
        <CompleteOrderForm />

        <CompleteOrder />
      </CheckoutContainer>
    </FormProvider>
  )
}
