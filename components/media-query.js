import { useState, useCallback, useEffect } from 'react'

function useMediaQuery (width) {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback(e => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return targetReached
}

function useIsMobile () {
  return useMediaQuery(768)
}

export { useMediaQuery, useIsMobile }
