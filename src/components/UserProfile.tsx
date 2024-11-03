"use client";

import { ArrowLeftIcon, EllipsisHorizontalIcon  } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Footer from './Footer';
import { useEffect, useState } from 'react';

export const UserProfile = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

 return (


  <div className="flex flex-col items-center p-4 relative">

    <div className="absolute top-4 left-4">
      <button>
      <ArrowLeftIcon className="h-6 w-6 text-black-700 cursor-pointer" />

      </button>
    </div>

    <div className="absolute top-4 text-black-700 cursor-pointer right-4">
      <button>

      <EllipsisHorizontalIcon  className="h-6 w-6 text-gray-500" />
      </button>
    </div>
    
    {isClient && (
        <Image
         className="rounded-full mt-8"
          src="/images/profile-instagram.jpeg"
          alt="Profile Image"
          width={175}
          height={175}
          priority
        />
      )}
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

    <div className="mt-4 w-full self-start">
      <p className="font-semibold font-inter text-center favorite-genres">Ashley’s Favorite Genres</p>
 

    </div>

    <div className="genres-container mt-4">
      <button className="button genres-button font-semibold">Romance</button>
      <button className="button genres-button font-semibold">Detective</button>
      <button className="button genres-button font-semibold">Mystery</button>
      <button className="button genres-button font-semibold">Sci-fi</button>
      <button className="button genres-button font-semibold">Fantasy</button>
    </div>

    <div className="mt-4 w-full self-start">
      <p className="font-semibold font-inter text-center favorite-books">Ashley’s Favorite Books</p>
    </div>

    <div className="books flex overflow-x-auto space-x-4">
  <Image src="/images/harry-pooter-book.png" alt="book" width={175} height={175} className="mt-8 w-32 object-contain" />
  <Image src="/images/realy-book.png" alt="realy-book" width={175} height={175} className="mt-8 w-32 object-contain" />
  <Image src="/images/no-place-book.png" alt="no-place-book" width={175} height={175} className="mt-8 w-32 object-contain" />
  <Image src="/images/beloved-book.png" alt="beloved-book" width={175} height={175} className="mt-8 w-32 object-contain" />
</div>


    <Footer/>
  </div>

)};
