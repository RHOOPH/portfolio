import { useState, useEffect } from "react"

function check(threshold) {
  const { innerWidth: width } = window
  if (width < threshold) return true
  else return false
}
// returns true if widow width is less than threshold else false
export default function useWindowWidthThreshold(threshold) {
  const [isLessThanThreshold, set] = useState(check(threshold))

  useEffect(() => {
    function handleResize() {
      set(check(threshold))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isLessThanThreshold
}
