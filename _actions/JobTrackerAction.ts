'use server'
import jopTrackerModel from '@/models/jopTrackerModel'
import connectDB from '@/config/database'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export async function getAllJopTrackers() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const userId = user?.id
  try {
    await connectDB()
    const jopTrackers = JSON.parse(
      JSON.stringify(await jopTrackerModel.find({ userId }, { userId: false }))
    )
    return {
      status: 200,
      data: jopTrackers,
    }
  } catch (error: any) {
    return { status: 500, message: 'Server Error' }
  }
}

export async function getOneJopTracker(id: string) {
  try {
    await connectDB()
    const jopTracker = JSON.parse(
      JSON.stringify(await jopTrackerModel.findById(id))
    )
    return { status: 200, data: jopTracker }
  } catch (error) {
    return { status: 500, message: 'Server Error' }
  }
}
export async function createJobTracker(
  state: { status: number; message: any },
  formData: FormData
) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const userId = user?.id
  const jopTracker = {
    postion: formData.get('postion'),
    company: formData.get('company'),
    location: formData.get('location'),
    jobStatus: formData.get('jobStatus'),
    jobMode: formData.get('jobMode'),
    userId,
  }
  try {
    await connectDB()
    await jopTrackerModel.create(jopTracker)
    revalidatePath('/jops')
    return {
      status: 200,
      message: 'job Tracker created successfully',
      redirect: '/jops',
    }
  } catch (error: any) {
    return {
      status: 400,
      message: Object.values(error.errors).map((val: any) => val.message),
    }
  }
}

export async function deleteJobTracker(
  state: { status: number; message: string },
  formData: FormData
) {
  const _id = formData.get('_id')
  try {
    revalidatePath('/jops')
    await jopTrackerModel.findByIdAndDelete(_id)
    return { status: 200, message: 'job Tracker deleted successfully' }
  } catch (error) {
    return { status: 500, message: 'Server Error' }
  }
}

export async function editJobTracker(
  state: { status: number; message: any },
  formData: FormData
) {
  const _id = formData.get('_id')
  const jopTracker = {
    postion: formData.get('postion'),
    company: formData.get('company'),
    location: formData.get('location'),
    jobStatus: formData.get('jobStatus'),
    jobMode: formData.get('jobMode'),
  }
  try {
    await connectDB()
    await jopTrackerModel.findByIdAndUpdate(_id, jopTracker, {
      new: true,
      old: false,
    })
    revalidatePath('/jops')
    return {
      status: 200,
      message: 'JobTracker updated successfully',
      redirect: '/jops',
    }
  } catch (error: any) {
    return {
      status: 500,
      message: Object.values(error.errors).map((val: any) => val.message),
    }
  }
}
