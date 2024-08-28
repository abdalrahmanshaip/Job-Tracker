'use client'
import { createJobTracker } from '@/_actions/JobTrackerAction'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'sonner'

const initialState = {
  redirect: '',
  status: 0,
  message: '',
}
const SubmitBtn = () => {
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
const AddJopPage = () => {
  const router = useRouter()
  const [jobStatus, setJobStatus] = useState('')
  const [jobMode, setJobMode] = useState('')
  const [state, formAction] = useFormState(createJobTracker, initialState)
  if (state.status === 200) {
    toast.success(state.message)
    router.push(state.redirect!)
  } else if (state.status === 400) {
    toast.error(state.message)
  }
  return (
    <div className='bg-muted p-5'>
      <h1 className='text-4xl font-bold'>Add Job</h1>
      <form
        action={formAction}
        className='grid  lg:grid-cols-3 gap-7 lg:gap-10 mt-5 items-center '
      >
        <div className='space-y-2'>
          <h1>Postion</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='postion'
          />
        </div>
        <div className='space-y-2'>
          <h1>Company</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='company'
          />
        </div>
        <div className='space-y-2'>
          <h1>Location</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='location'
          />
        </div>
        <div className='space-y-2 text-black'>
          <Select onValueChange={(e) => setJobStatus(e)}>
            <SelectTrigger className='bg-white'>
              <SelectValue placeholder='Job Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='pending'>Pending</SelectItem>
                <SelectItem value='interview'>Interview</SelectItem>
                <SelectItem value='declined'>Declined</SelectItem>
              </SelectGroup>
            </SelectContent>
            <Input
              value={jobStatus}
              name='jobStatus'
              type='hidden'
            />
          </Select>
        </div>
        <div className='space-y-2 text-black'>
          <Select onValueChange={(e) => setJobMode(e)}>
            <SelectTrigger className='bg-white'>
              <SelectValue placeholder='Job Mode' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='full-time'>Full time</SelectItem>
                <SelectItem value='part-time'>Part time</SelectItem>
              </SelectGroup>
            </SelectContent>
            <Input
              value={jobMode}
              name='jobMode'
              type='hidden'
            />
          </Select>
        </div>
        <SubmitBtn />
      </form>
    </div>
  )
}

export default AddJopPage
