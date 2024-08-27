'use client'
import { deleteJobTracker } from '@/_actions/JobTrackerAction'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'sonner'

const initialstate = {
  status: 0,
  message: '',
}
const DeleteBtn = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      disabled={pending}
      type='submit'
    >
      {pending ? 'Delete...' : 'Delete'}
    </Button>
  )
}
const DeleteJop = ({ _id }: { _id: string }) => {
  const [state, formAction] = useFormState(deleteJobTracker, initialstate)
  if (state.status === 200) {
    toast.success(state.message)
  } else if (state.status === 400) {
    toast.error(state.message)
  }
  return (
    <form action={formAction}>
      <input
        type='hidden'
        value={_id}
        name='_id'
      />
      <DeleteBtn />
    </form>
  )
}

export default DeleteJop
