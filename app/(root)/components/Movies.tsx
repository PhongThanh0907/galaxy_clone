import ItemMovie from '@/components/layouts/item_movie'
import Titles from '@/components/layouts/titles'
import React from 'react'

const Movies = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Titles title='Phim' subTabs={["Đang chiếu", "Sắp chiếu"]}/>

        <div className='grid grid-cols-4 gap-6'>
          {Array.from({ length: 8 }).map((item, index) => (
            <ItemMovie key={index} />
          ))}
        </div>
    </div>
  )
}

export default Movies