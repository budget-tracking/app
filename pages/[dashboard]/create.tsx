import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React, { BaseSyntheticEvent } from 'react'

interface Props { }

function Create(props: Props) {
  const { } = props
  const router = useRouter()
  const {data: session, status} = useSession()
  if (status === 'loading') return null
  if (!session) router.push('/')

  const handleFormSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log(e.target.constructor.name);
    
    const formData = new FormData(e.target)
    for (const item in formData.entries()) {
      console.log({item});
      
    }
    // console.log();
    
    
  }

  return (
    <>
      <form action="/api/dashboard/create" method="POST" onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="description" id="" />
        <input type="number" name="amount" id="" required />
        <select name="type" id="">
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
