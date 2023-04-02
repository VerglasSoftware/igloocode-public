import Image from "next/image";
import Link from "next/link";
export var siteTitle = "IglooCode";

import { useRouter } from 'next/router'

import { TbCircleFilled, TbHandStop, TbHeartFilled, TbHelp, TbHomeBolt, TbLogicXnor, TbPlus, TbSettings, TbTrophy } from "react-icons/tb";

export default function Sidebar({ }) {
    const router = useRouter();

    const navigationItems = [
        { title: "Dashboard", url: "/dashboard", icon: TbHomeBolt, selected: router.pathname === "/dashboard" },
        { title: "Competitions", url: "/dashboard/competitions", icon: TbTrophy, selected: router.pathname === "/dashboard/competitions" },
        { title: "Classes", url: "/dashboard/classes", icon: TbHandStop, selected: router.pathname === "/dashboard/classes" },
        { title: "Tasks", url: "/dashboard/tasks", icon: TbLogicXnor, selected: router.pathname === "/dashboard/tasks" },
        { break: true },
        { title: "Settings", url: "/dashboard/settings", icon: TbSettings, selected: router.pathname === "/dashboard/settings" },
        { title: "Support", url: "/dashboard/support", icon: TbHelp, selected: router.pathname === "/dashboard/support" },
    ]

    return (
                <aside className="w-full md:w-60 border-r-gray-200 border-r-2 flex flex-col justify-start">
                    <div className="flex flex-row h-18 justify-center items-center py-5 pt-6">
                        <Image
                        src={"/images/logo_full.png"}
                        width={200}
                        height={40}
                         />
                    </div>
                    <div className="p-5">
                        {
                            navigationItems.map(n => {
                                if (!n.break) {
                                return (
                                    <Link href={n.url}>
                                    <div className={"flex flex-1 items-center text-gray-600 hover:bg-gray-100 p-2 rounded-md mb-1" + (n.selected ? " bg-gray-100" : "")}>
                                        <n.icon size={25} />
                                        <span className="ml-3 text-md font-medium">{n.title}</span>
                                    </div>
                                    </Link>
                                )
                                } else {
                                    return (
                                        <hr className="mb-3 mt-2" />
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="flex flex-col flex-1 justify-end">
                    <div className="flex flex-col p-5">
                        
                        <div className="flex flex-row items-center mb-2">
                            <span className="text-sm font-semibold flex-1">Recent competitions</span>
                            <Link href={"/"}>
                            <div className="flex justify-center items-center border-gray-200 border-2 p-[2px] rounded-md hover:bg-gray-100">
                                <TbPlus className="" />
                            </div>
                            </Link>
                        </div>

                        <Link href={"/dashboard"}>
                            <div className={"flex flex-1 items-center text-gray-600 hover:bg-gray-100 p-2 rounded-md mb-1" + (false ? " bg-gray-100" : "")}>
                                <TbCircleFilled size={13} className="text-red-700" />
                                <span className="ml-3 text-md font-medium">{"IglooCode 2023"}</span>
                            </div>
                        </Link>

                        <Link href={"/dashboard"}>
                            <div className={"flex flex-1 items-center text-gray-600 hover:bg-gray-100 p-2 rounded-md mb-1" + (false ? " bg-gray-100" : "")}>
                                <TbCircleFilled size={13} className="text-blue-700" />
                                <span className="ml-3 text-md font-medium">{"Test ctf"}</span>
                            </div>
                        </Link>

                    </div>
                    <div className="text-gray-500 flex flex-row justify-center items-center w-60 mb-5">
                        <p className="text-center text-sm">Made with <TbHeartFilled className="inline mx-1 text-red-600" /> in the UK by <br />
                        <a href="https://dandabs.io" className="hover:text-ic-purple">Daníel Adams</a> and <a href="" className="hover:text-ic-purple">Jake Gillman</a>.</p>
                    </div>
                    </div>
                </aside>
    );
}
