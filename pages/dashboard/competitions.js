import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from "../../components/dashboard/layout";
import { TbPlus } from 'react-icons/tb';

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

        <div className="w-full h-[2px] bg-gray-200 my-6" />


      </Layout>
  );
}
