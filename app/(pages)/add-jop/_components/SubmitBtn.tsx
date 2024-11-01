import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      disabled={pending}
      className='mt-auto'
      type='submit'
    >
      {pending ? 'Adding jop...' : 'Add Job'}
      <span className='ml-2'>+</span>
    </Button>
  )
}
