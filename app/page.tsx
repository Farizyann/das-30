import type { Metadata } from "next";
import { Posts } from "./components/Posts";

export default function PostsPage() {
  return <Posts />;
}

export const metadata: Metadata = {
  title: "Posts",
  icons:"/download.png"
};
