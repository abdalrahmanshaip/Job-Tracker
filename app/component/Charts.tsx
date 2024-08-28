'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const Charts = ({
  PendingJops,
  InterwiewsSet,
  DeclinedJops,
}: {
  PendingJops: number
  InterwiewsSet: number
  DeclinedJops: number
}) => {
  const chartConfig = {
    pending: {
      label: 'Pending Jobs',
      color: 'hsl(var(--chart-1))',
    },
    interviews: {
      label: 'Interviews Set',
      color: 'hsl(var(--chart-2))',
    },
    declined: {
      label: 'Declined Jobs',
      color: 'hsl(var(--chart-3))',
    },
  } satisfies ChartConfig

  const Data = [
    { name: chartConfig.pending.label, value: PendingJops },
    { name: chartConfig.interviews.label, value: InterwiewsSet },
    { name: chartConfig.declined.label, value: DeclinedJops },
  ]

  return (
    <Card className=' lg:w-full w-96'>
      <CardHeader>
        <CardTitle>Job Applications Overview</CardTitle>
        <CardDescription>
          Visual representation of job application statuses
        </CardDescription>
      </CardHeader>
      <CardContent className='h-56'>
        <ChartContainer
          config={chartConfig}
          className='h-56 w-full'
        >
          <AreaChart
            data={Data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip content={<ChartTooltipContent indicator='dot' />} />
            <Area
              type='monotone'
              dataKey='value'
              stroke={chartConfig.pending.color}
              fill={chartConfig.pending.color}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Charts
