"use client";

import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export const Header = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>

            <div className="absolute top-4 left-4">
                <button>
                    <ArrowLeftIcon className="h-6 w-6 text-black-700 cursor-pointer" />

                </button>
            </div>

            <div className="absolute top-4 text-black-700 cursor-pointer right-4">
                <button>

                    <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" />
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

        </>
    )
}
