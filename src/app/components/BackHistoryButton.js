'use client'

export default function BackHistoryButton() {
  return (
    <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button>
  )
}