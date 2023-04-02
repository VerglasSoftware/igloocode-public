import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

import { TbLogout } from "react-icons/tb";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { TbBellFilled } from "react-icons/tb";
import Link from "next/link";

export default function NotificationMenu() {
    const { user, error, isLoading } = useUser();

    return (
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="outline-none">
                        <div className="bg-white h-[40px] w-[40px] flex flex-row justify-center items-center rounded-full mr-5 relative">
                    <TbBellFilled size={23} />
                    <div className="bg-red-600 rounded-full h-[1rem] w-[1rem] flex flex-row justify-center items-center text-white text-xs absolute bottom-7 left-7">
                        4
                    </div>
                </div>
                        </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-[30rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-3 flex flex-row">
                            <Menu.Item>
                            {({ active }) => (
                                <>

                        <div className="w-40 flex flex-col items-center">
                        <Image
                    src={"https://ui-avatars.com/api/?background=random&name=D+A"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                        </div>
                            
                            <div className="flex flex-col ml-3">
                            <span className="font-semibold text-sm">Example message title</span>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec consequat libero. Ut auctor mollis lorem sit amet posuere. Nam non enim quis libero interdum elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </>
                            )}
                            </Menu.Item>
                        </div>

                        <div className="p-3 flex flex-row">
                            <Menu.Item>
                            {({ active }) => (
                                <>

                        <div className="w-40 flex flex-col items-center">
                        <Image
                    src={"https://ui-avatars.com/api/?background=random&name=P+R"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                        </div>
                            
                            <div className="flex flex-col ml-3">
                            <span className="font-semibold text-sm">Example message title</span>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec consequat libero. Ut auctor mollis lorem sit amet posuere. Nam non enim quis libero interdum elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </>
                            )}
                            </Menu.Item>
                        </div>

                        <div className="p-3 flex flex-row">
                            <Menu.Item>
                            {({ active }) => (
                                <>
                        <div className="flex flex-row flex-1">
                            <div className="flex flex-1">
                            <Link href="/" className="hover:text-ic-purple">View more</Link>
                            </div>

                            <div className="flex">
                            <Link href="/" className="hover:text-ic-purple">Dismiss all</Link>
                            </div>
                            
                            
                        </div>
                            </>
                            )}
                            </Menu.Item>
                        </div>

          </Menu.Items>
                    </Transition>
                </Menu>
    );
}