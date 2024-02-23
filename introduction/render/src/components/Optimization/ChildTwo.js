import React from 'react'

export const ChildTwo = () => {
    console.log('ChildTwo render')
  return (
    <div>
      Child Two Component
    </div>
  )
}
export const MemoizedChildTwo = React.memo(ChildTwo)

