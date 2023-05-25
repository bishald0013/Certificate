import React from 'react'


function Cards({card}) {
  return (
    <div className=''>
          <div class="card text-bg-dark">
            <img src={card} class="card-img" alt="..." />
          </div>
    </div>
  )
}

export default Cards