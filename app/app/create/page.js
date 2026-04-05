"use client"
import { useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import { useRouter } from "next/navigation"

const emotions = ["miss", "empty", "motivated", "late night", "peaceful"]

export default function Create() {
  const [emotion, setEmotion] = useState("")
  const [song, setSong] = useState("")
  const [text, setText] = useState("")
  const router = useRouter()

  async function handleSubmit() {
    if (!emotion || !song) {
      alert("Emotion and song required")
      return
    }

    await supabase.from("posts").insert([
      {
        emotion,
        song,
        text
      }
    ])

    router.push("/")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Create Post</h1>

      <select onChange={(e) => setEmotion(e.target.value)}>
        <option>Select emotion</option>
        {emotions.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>

      <br /><br />

      <input
        placeholder="Song name"
        onChange={(e) => setSong(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Optional text"
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Post</button>
    </div>
  )
}
