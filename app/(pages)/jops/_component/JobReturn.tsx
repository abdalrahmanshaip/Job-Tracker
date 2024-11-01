import DeleteJop from '@/app/component/DeleteJop'
import { Button } from '@/components/ui/button'
import {
  AlignVerticalSpaceAround,
  Calendar,
  ChartBar,
  MapPin
} from 'lucide-react'
import Link from 'next/link'

export interface TypeJopTracker {
  _id: string
  postion: string
  company: string
  location: string
  jobStatus: string
  jobMode: string
  createdAt: Date
  updatedAt: Date
}

const JobReturn = ({ item }: { item: TypeJopTracker }) => {
  return (
    <div
      key={item._id}
      className=''
    >
      <div className='bg-muted p-5 rounded-lg'>
        <h1 className='text-3xl font-bold capitalize'>{item.postion}</h1>
        <span className='text-gray-500'>{item.company}</span>
        <div className='icons mt-10'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <AlignVerticalSpaceAround />
              {item.jobMode}
            </div>
            <div className='flex  gap-2'>
              <MapPin />
              {item.location}
            </div>
          </div>
          <div className='flex mt-10 justify-between'>
            <div className='flex  gap-2'>
              <Calendar />
              {new Date(item.createdAt).toDateString()}
            </div>
            <div className='flex  gap-2'>
              <ChartBar />
              {item.jobStatus}
            </div>
          </div>
        </div>
        <div className='actions flex justify-end mt-5 gap-5'>
          <DeleteJop _id={item._id} />
          <Button asChild>
            <Link href={`/edit-jop/${item._id}`}>Edit</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JobReturn
