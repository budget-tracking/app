import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React, { BaseSyntheticEvent, useState } from 'react'

interface Props { }

type Form = {
  description: string
  amount: string
  type: string
}

function Create(props: Props) {
  const { } = props
  const router = useRouter()
  const { data: session, status } = useSession()
  const [form, setForm] = useState<Form>({
    amount: "",
    description: "",
    type: ""

  })
  if (status === 'loading') return null
  if (!session) router.push('/')

  const handleFormSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log(form);
    // TODO make request to POST /api/dashboard/create
  }

  const handleFormChange = (e: BaseSyntheticEvent) => {
    const target = e.target
    const { name, value } = target
    setForm({ ...form, ...{ [name]: value } })
    console.log(form);
    
  }

  return (
    <>
      <form
        action="/api/dashboard/create"
        method="POST"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type="number"
          name="amount"
          required
          placeholder="Amount"
          value={form.amount}
          onChange={e => handleFormChange(e)}

        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={e => handleFormChange(e)}

        />
        <select
          // TODO check if it is better to call typeName
          name="type"
          onChange={e => handleFormChange(e)}
          defaultValue=""
          required
        >
          <option value="" disabled>select</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Entry</button>
        <button onClick={(e) => {
          e.preventDefault()
          router.push('/dashboard')
        }}>Cancel</button>
      </form>
    </>
  )
}

export default Create
