import { User } from '@/app/components/User';
import { Metadata } from 'next';
import React from 'react'

export default function UserPage({params} : any) {
  return (
    <User id={params.id}/>
  )
}

export const metadata: Metadata = {
  title: "User",
  icons: "/download.png"
};