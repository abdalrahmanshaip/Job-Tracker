import { getOneJopTracker } from '@/_actions/JobTrackerAction'
import EditJop from '@/app/component/EditJop'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EditJopPage = async ({ params }: { params: { id: string } }) => {
  const {data} = await getOneJopTracker(params.id)
  return (
    <div className='space-y-5'>
      <Button asChild><Link href={'/jops'}>Back</Link></Button>
      <EditJop jopTracker={data}/>
    </div>
  )
}

export default EditJopPage
