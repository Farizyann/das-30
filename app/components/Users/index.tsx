'use client';
import { getUsersData, selectUsers } from '@/lib/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React, { useEffect } from 'react'

export const Users = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getUsersData())
  }, [])
  
  return (
    <div>Users</div>
  )
}
