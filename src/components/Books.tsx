
import React from 'react'
import Image from 'next/image';

export const Books = () => {
    return (
        <>
            <div className="mt-4 w-full self-start">
                <p className="font-semibold font-inter text-center favorite-books">Ashley’s Favorite Books</p>
            </div>

            <div className="books flex overflow-x-auto space-x-4">
                <Image src="/images/harry-pooter-book.png" alt="book" width={175} height={175} className="mt-8 w-32 object-contain" />
                <Image src="/images/realy-book.png" alt="realy-book" width={175} height={175} className="mt-8 w-32 object-contain" />
                <Image src="/images/no-place-book.png" alt="no-place-book" width={175} height={175} className="mt-8 w-32 object-contain" />
                <Image src="/images/beloved-book.png" alt="beloved-book" width={175} height={175} className="mt-8 w-32 object-contain" />
            </div>


        </>
    )
}
