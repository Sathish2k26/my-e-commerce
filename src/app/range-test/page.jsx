'use client'
import React from 'react'

export default function page() {
    const min = 0
    const max = 1000
    const accept = 800
    const [currentprice, setcurrentprice] = React.useState(min)

    const trackRef = React.useRef(null)
    const handleRef = React.useRef(null)
    const wrapperRef = React.useRef(null) // scrollable window wrapper

    const positionToValue = (clientX) => {
        const track = trackRef.current
        if (!track) return currentprice
        const rect = track.getBoundingClientRect()
        let percent = (clientX - rect.left) / rect.width
        percent = Math.max(0, Math.min(1, percent))
        return Math.round(min + percent * (max - min))
    }

    const onDrag = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const val = positionToValue(clientX)
        setcurrentprice(val)
        // make sure handle stays in view
        const wrapper = wrapperRef.current
        const handle = handleRef.current
        if (wrapper && handle) {
            const wrapRect = wrapper.getBoundingClientRect()
            const handleRect = handle.getBoundingClientRect()
            // if handle is near left or right edge, adjust scroll
            const padding = 20 // px from edge before scrolling
            if (handleRect.left < wrapRect.left + padding) {
                wrapper.scrollLeft -= (wrapRect.left + padding - handleRect.left)
            } else if (handleRect.right > wrapRect.right - padding) {
                wrapper.scrollLeft += (handleRect.right - (wrapRect.right - padding))
            }
        }
    }

    const stopDrag = () => {
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', stopDrag)
        window.removeEventListener('touchmove', onDrag)
        window.removeEventListener('touchend', stopDrag)
    }

    const startDrag = (e) => {
        e.preventDefault()
        window.addEventListener('mousemove', onDrag)
        window.addEventListener('mouseup', stopDrag)
        window.addEventListener('touchmove', onDrag)
        window.addEventListener('touchend', stopDrag)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        setcurrentprice(positionToValue(clientX))
    }

    const trackWidth = max - min
    const stepCount = Math.max(1, Math.floor(trackWidth / 48))

    const labels = Array.from({ length: stepCount + 1 }, (_, i) => {
        const percent = i / stepCount
        return Math.round(min + percent * (max - min))
    })

    return (
        <div className='m-auto w-3/4'>
            <h1 className='text-2xl font-bold text-center mb-4'>Price Range Test</h1>
            <div className='relative flex justify-center'>
                {/* visible window 389px wide */}
                <div ref={wrapperRef} className="w-[389px] overflow-x-auto">
                    {/* custom slider track */}
                    <div
                        ref={trackRef}
                        className="h-2 bg-gray-200 rounded-lg relative"
                        style={{ width: trackWidth + 'px' }}
                        onMouseDown={startDrag}
                        onTouchStart={startDrag}
                    >
                    {/* accept threshold marker */}
                    <div
                        className="absolute top-0 h-full w-0.5 bg-red-500"
                        style={{ left: (((accept - min) / (max - min)) * 100) + '%' }}
                    />
                    {/* filled portion */}
                    <div
                        className={`h-full rounded-lg ${currentprice >= accept ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: (((currentprice - min) / (max - min)) * 100) + '%' }}
                    />
                    {/* draggable handle; handle size can be adjusted by changing the w/h values below */}
                    <div
                        ref={handleRef}
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white border-2 border-blue-500 rounded-full cursor-grab"
                        style={{ left: (((currentprice - min) / (max - min)) * 100) + '%' }}
                        onMouseDown={startDrag}
                        onTouchStart={startDrag}
                    />
                </div>
                {/* tick marks (scroll together with track) */}
                <div
                    className="flex justify-between mt-1 text-sm text-gray-600"
                    style={{ width: trackWidth + 'px' }}
                >
                    {labels.map((val) => (
                        <span key={val}>{val}</span>
                    ))}
                </div>
                {/* end of scrollable window */}
                </div>
            </div>
            <p className='text-center mt-4'>Current Price: {currentprice}</p>
        </div>
    )
}
