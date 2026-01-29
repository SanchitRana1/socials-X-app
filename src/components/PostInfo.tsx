import React from 'react'
import ImageComp from './Image'

const PostInfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
     <ImageComp src='/icons/infoMore.svg' alt='Info' w={16} h={16} tr={true} />
    </div>
  )
}

export default PostInfo