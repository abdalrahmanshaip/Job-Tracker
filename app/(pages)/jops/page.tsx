import { getAllJopTrackers } from '@/_actions/JobTrackerAction'

import React from 'react'
import JobReturn from './_component/JobReturn'



const JopsPage = async () => {
  const { data } = await getAllJopTrackers()
  const jopsTracker = Array.isArray(data) ? data : [data]

  return (
    <div>
      <div className=' capitalize font-bold text-3xl'>
        {jopsTracker.length} Jobs Found
      </div>
      <div className='grid lg:grid-cols-2 gap-10 mt-10'>
        {jopsTracker.map((item) => {
          return (
            <JobReturn key={item._id} item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default JopsPage
