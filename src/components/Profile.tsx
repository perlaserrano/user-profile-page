import React from 'react'

export const Profile = () => {
  return (
    <>
    <div className="mt-4 text-center">
      <h1 className="text-2xl font-semibold font-inter">Ashley Wilson</h1>
    </div>

    <div className="flex space-x-8 mt-4">
      <div className="text-center">
        <p className="text-lg font-semibold">60</p>
        <p className='word'>Followers</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">33</p>
        <p className='word'>Following</p>
      </div>
    </div>

    <div className="flex mt-4 gap-2">
      <button className="button message-two">Follow</button>
      <button className="button message">Message</button>
    </div>

    <div className="flex space-x-8 mt-4">
      <div className="text-center">
        <p className="text-lg font-semibold">30</p>
        <p className='word'>books <br /> read</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">2</p>
        <p className='word'>currently <br /> reading</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">50</p>
        <p className='word'>to-read</p>
      </div>
    </div>
    </>
  )
}
