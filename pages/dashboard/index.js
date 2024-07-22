import React from 'react'
import DashboardLayout from './components/DashboardLayout';
import { getSession } from 'next-auth/react';

const Dashboard = () => {
  return(
    <DashboardLayout>
      <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
      <p>Your content goes here...</p>
     
    </DashboardLayout>
    )
}

export async function getServerSideProps (context) {
  const session = await getSession(context)

  if (!session) {
    // User is authenticated, redirect to home page
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: session
    }
  }
}

export default Dashboard
