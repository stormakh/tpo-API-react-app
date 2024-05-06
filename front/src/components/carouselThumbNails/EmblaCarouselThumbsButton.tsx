import React, { ReactNode } from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  slide: ReactNode
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, slide } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {slide}
      </button>
    </div>
  )
}
