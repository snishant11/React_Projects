import { useEffect, useState } from 'react'

let CurrentTime = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('Interval has been setup')
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
      console.log('Canclled the interval')
    }
  }, [])

  return (
    <p className="lead">
      This is the current time: {date.toLocaleDateString()} -{' '}
      {date.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime
