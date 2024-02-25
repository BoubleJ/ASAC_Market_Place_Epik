'use client'
import React, { useEffect, useState } from 'react'

export default function WeekendTimeLeft() {
  const [timeLeft, setTimeLeft] = useState<string>('00 : 00 : 00')

  const calculateTimeLeft = () => {
    const difference = +new Date('2024-02-26T23:59:59') - +new Date()

    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      const formattedTime = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`

      return formattedTime
    }

    return '00 : 00 : 00'
  }

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return <div className=" text-xl font-normal text-gray-600">{timeLeft}</div>
}
