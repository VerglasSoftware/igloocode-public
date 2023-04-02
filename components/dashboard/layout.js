import Head from "next/head";
export var siteTitle = "IglooCode";

export default function Layout({ children, session }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="bg-fuchsia-100 w-full md:w-60"></aside>
                <div className="flex flex-col flex-1">
                    <header
                        className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase"
                    >
                        Next.js sidebar menu
                    </header>
                    <main className="flex-1">{children}</main>
                </div>
            </div>
        </div>
    );
}
