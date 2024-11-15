import { Metadata } from 'next';
import React from 'react'
import { Users } from '../components/Users';

export default function UsersPage() {
  return (
    <Users/>
  )
}

export const metadata: Metadata = {
  title: "Users",
  icons:"/download.png"
};
