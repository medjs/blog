import { useSession } from 'next-auth/react'
import Image from 'next/image'

const ProfileComponent = () => {
  const { data: session } = useSession()

  return (
    <div className='flex justify-around items-center border rounded-md p-3'>
      <div>
        {session?.user?.image ? (
          <Image
            className=' rounded-full'
            src={`${session.user.image}`}
            width={60}
            height={60}
            alt='user image'
          />
        ) : (
          <div className='rounded-full bg-gray-500'>
            <p className='flex justify-center items-center font-semibold text-white w-10 h-10'>
              {session?.user.email.charAt(0).toUpperCase()}
            </p>
          </div>
        )}
      </div>
      <div>
      {session?.user?.name && (
        <p>
          <span className='font-semibold'>Name:</span> {session?.user?.name}
        </p>
      )}
        
        <p>
          <span className='font-semibold'>Email:</span> {session?.user.email}
        </p>
      </div>
    </div>
  )
}

export default ProfileComponent
