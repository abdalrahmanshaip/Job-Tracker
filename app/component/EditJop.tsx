'use client'
import { editJobTracker } from '@/_actions/JobTrackerAction'
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
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { SubmitBtn } from '../(pages)/add-jop/_components/SubmitBtn'
import { TypeJopTracker } from '../(pages)/jops/_component/JobReturn'

const initialState = {
  redirect: '',
  status: 0,
  message: '',
}

const EditJop = ({ jopTracker }: { jopTracker: TypeJopTracker }) => {
  const router = useRouter()
  const [jobStatus, setJobStatus] = useState(jopTracker.jobStatus)
  const [jobMode, setJobMode] = useState(jopTracker.jobMode)
  const [state, formAction] = useFormState(editJobTracker, initialState)
  if (state.status === 200) {
    toast.success(state.message)
    router.push(state.redirect!)
  } else if (state.status === 400) {
    toast.error(state.message)
  }
  return (
    <div className='bg-muted p-5'>
      <h1 className='text-4xl font-bold'>Edit Job</h1>
      <form
        action={formAction}
        className='grid grid-cols-3 gap-10 mt-5 items-center '
      >
        <div className='space-y-2'>
          <Input
            type='hidden'
            name='_id'
            value={jopTracker._id}
          />
          <h1>Postion</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='postion'
            defaultValue={jopTracker.postion}
          />
        </div>
        <div className='space-y-2'>
          <h1>Company</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='company'
            defaultValue={jopTracker.company}
          />
        </div>
        <div className='space-y-2'>
          <h1>Location</h1>
          <Input
            type='text'
            className='bg-white text-black'
            name='location'
            defaultValue={jopTracker.location}
          />
        </div>
        <div className='space-y-2 text-black'>
          <Select
            onValueChange={(e) => setJobStatus(e)}
            defaultValue={jopTracker.jobStatus}
          >
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
          <Select
            onValueChange={(e) => setJobMode(e)}
            defaultValue={jopTracker.jobMode}
          >
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

export default EditJop
