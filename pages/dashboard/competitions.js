import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from "../../components/dashboard/layout";
import { TbCircleFilled, TbPencil, TbPlus, TbSearch, TbTrash, TbTrashFilled } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';

export default function Competitions() {
  const { user, error, isLoading } = useUser();

  return user && (
        <Layout title={"Competitions"}>
        <div className="flex flex-row">
          <div className="flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">Competitions</h1>
        <p className="mt-2 text-gray-500">Manage your capture-the-flag competitions and their properties here.</p>
          </div>
          <div>
            <button
            className="flex flex-row justify-center items-center border-2 border-gray-200 hover:bg-gray-100 rounded-md p-2 px-3"
            onClick={() => { window.location.href = "/dashboard"; } }
            >
              <TbPlus size={15} />
              <span className="ml-3 font-medium text-sm">Add a competition</span>
            </button>
          </div>
        </div>

        <div className="w-full h-[2px] bg-gray-200 mt-6 mb-4" />

        <div className="flex flex-row items-center">
          <TbSearch />
          <span className="text-gray-500 ml-3">Search</span>
        </div>

        <div className="w-full h-[2px] bg-gray-200 mt-4 mb-6" />

<div className="border-2 rounded-md border-gray-200 shadow-sm">
        <table className="w-full">
          <tr className="bg-gray-100 border-b-2">
            <th className="text-left p-3 w-1"><input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" /></th>
            <th className="text-left p-3 text-sm text-gray-600">Name</th>
            <th className="text-left p-3 text-sm text-gray-600">Status</th>
            <th className="text-left p-3 text-sm text-gray-600">Date created</th>
            <th className="text-left p-3 text-sm text-gray-600">Last active</th>
            <th className="text-left p-3 w-1"></th>
          </tr>
          <tr className="even:bg-gray-50">
            <td className="p-3">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
            </td>
            <td className="p-3 flex flex-row items-center">
              <Image
                    src={"/images/icl.png"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="ml-3 font-medium">IglooCode 2023</span>
            </td>
            <td className="p-3">
              <div className="inline-flex marker:flex-row items-center py-1 px-2 rounded-full border border-gray-200 border-2 bg-gray-100">
                <TbCircleFilled size={11} className="text-red-700" />
                <span className="ml-2 mr-1 text-gray-700 text-sm">Ended</span>
              </div>
            </td>
            <td><span className="p-3 text-gray-500">Nov 14, 2022</span></td>
            <td><span className="p-3 text-gray-500">Mar 28, 2023</span></td>
            <td className="p-3 w-1"><div className="flex flex-row">
              <Link href=""><TbTrash size={19} className="text-gray-500 mr-5" /></Link>
              <Link href=""><TbPencil size={19} className="text-gray-500" /></Link>
              </div></td>
          </tr>
          <tr className=" odd:bg-gray-100">
            <td className="p-3">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
            </td>
            <td className="p-3 flex flex-row items-center">
              <Image
                    src={"https://ui-avatars.com/api/?background=random&name=Test+c"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="ml-3 font-medium">Test ctf</span>
            </td>
            <td className="p-3">
              <div className="inline-flex marker:flex-row items-center py-1 px-2 rounded-full border border-gray-200 border-2 bg-gray-100">
                <TbCircleFilled size={11} className="text-blue-700" />
                <span className="ml-2 mr-1 text-gray-700 text-sm">Waiting</span>
              </div>
            </td>
            <td><span className="p-3 text-gray-500">Apr 2, 2023</span></td>
            <td><span className="p-3 text-gray-500">Never</span></td>
            <td className="p-3 w-1"><div className="flex flex-row">
              <Link href=""><TbTrash size={19} className="text-gray-500 mr-5" /></Link>
              <Link href=""><TbPencil size={19} className="text-gray-500" /></Link>
              </div></td>
          </tr>
        </table>
        </div>

      </Layout>
  );
}
