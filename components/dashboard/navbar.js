import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

import { TbArchive, TbBellFilled, TbBoxMultiple, TbExternalLink, TbLogout, TbPencil, TbTrashFilled } from "react-icons/tb";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import UserMenu from './navmenus/user'
import NotificationMenu from './navmenus/notification'

export default function Navbar({ title }) {
    const { user, error, isLoading } = useUser();

    return (
        <header
            className="sticky top-0 h-18 items-center p-5 border-b-2 border-b-gray-200 bg-gray-100 flex flex-row"
        >
            <div className="font-normal text-3xl flex-1">
                {title}
            </div>
            <div className="flex flex-row items-center">
                <NotificationMenu />
                <UserMenu />
            </div>
        </header>
    );
}
