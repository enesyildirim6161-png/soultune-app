"use client"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Link from "next/link"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })

    setPosts(data)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Emotion Feed</h1>

      <Link href="/create">+ Create Post</Link>

      {posts?.map((post) => (
        <div key={post.id} style={{ marginTop: 20 }}>
          <h3>{post.emotion}</h3>
          <p>🎵 {post.song}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  )
}
