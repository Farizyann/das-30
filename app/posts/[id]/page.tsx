import { Post } from '@/app/components/Post';
import { Posts } from '@/app/components/Posts';
import { Metadata } from 'next';
import React from 'react'

export default function PostPage({ params }: any) {
  return (
    <Post id={params.id} />
  )
}

export const metadata: Metadata = {
  title: "Post",
  icons: "/download.png"
};