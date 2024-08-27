import { getAllJopTrackers } from '@/_actions/JobTrackerAction'
import Charts from '@/app/component/Charts'

const StatsPage = async () => {
  const { data } = await getAllJopTrackers()
  const jopTracker = Array.isArray(data) ? data : []
  const mapingJopTracker = jopTracker.map((item) => item)
  const jobStatus = {
    PendingJops: mapingJopTracker.filter((x) => x.jobStatus === 'pending')
      .length,
    InterwiewsSet: mapingJopTracker.filter((x) => x.jobStatus === 'interview')
      .length,
    DeclinedJops: mapingJopTracker.filter((x) => x.jobStatus === 'declined')
      .length,
  }

  return (
    <div>
      <div className='header grid grid-cols-3 gap-x-4'>
        <span className='bg-muted p-5 text-center text-2xl'>
          Pending Jobs {jobStatus.PendingJops}
        </span>
        <span className='bg-muted p-5 text-center text-2xl'>
          Interwiews Set {jobStatus.InterwiewsSet}
        </span>
        <span className='bg-muted p-5 text-center text-2xl'>
          Jobs Declined {jobStatus.DeclinedJops}
        </span>
      </div>
      <div className='charts mt-10'>
        <Charts PendingJops={jobStatus.PendingJops} InterwiewsSet={jobStatus.InterwiewsSet}  DeclinedJops={jobStatus.DeclinedJops}/>
      </div>
    </div>
  )
}

export default StatsPage
