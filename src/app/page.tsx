/* eslint-disable @next/next/no-img-element */
"use client";
import FormCNPJ from "@/Components/FormCNPJ";
import { Layout } from "@/Layout/Layout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <Layout.Structure>
        <Layout.Header />
        <Layout.Banner url="./banner.jpg"></Layout.Banner>
        <Layout.Content className="flex flex-col justify-center">
          <div className="flex flex-col items-center py-5">
            <FormCNPJ />
          </div>
          <h2 className="bg-violet-700 text-center p-4 text-2xl text-white rounded-xl">
            Sobre nós
          </h2>
          <section className="flex justify-center">
            <div className="flex flex-wrap gap-4 py-5 w-[450px]">
              <Layout.Profile
                target="_blank"
                className="flex items-center w-full gap-10 bg-black/25 px-5 py-4 rounded-xl hover:bg-black/15 transition-all select-none"
                href="https://github.com/DanielMarcosPires"
                src="https://avatars.githubusercontent.com/u/89848369?v=4"
              >
                <div>
                  <h2 className="text-2xl select-none">Daniel Marcos</h2>
                  <p className="text-xl select-none">Auxiliar de T.I</p>
                </div>
                <img
                  className="absolute top-0 right-0 p-5 select-none"
                  src="./github.svg"
                  alt="icon"
                />
              </Layout.Profile>
              <Layout.Profile
                target="_blank"
                className="flex flex-row-reverse w-full items-center gap-10 bg-black/25 px-5 py-4 rounded-xl hover:bg-black/15 transition-all select-none"
                href="https://github.com/humbertoribeirodefreitas"
                src="https://avatars.githubusercontent.com/u/55026862?v=4"
              >
                <div>
                  <h2 className="text-2xl select-none">Humberto Ribeiro</h2>
                  <p className="text-xl select-none">Auxiliar de T.I</p>
                </div>
                <img
                  className="absolute top-0 left-0 p-5 select-none"
                  src="./github.svg"
                  alt="icon"
                />
              </Layout.Profile>
              <Layout.Profile
                target="_blank"
                className="flex items-center w-full gap-10 bg-black/25 px-5 py-4 rounded-xl hover:bg-black/15 transition-all select-none"
                href="https://github.com/gatrack00"
                src="https://avatars.githubusercontent.com/u/130569548?v=4"
              >
                <div>
                  <h2 className="text-2xl select-none">Gabriel Cardoso</h2>
                  <p className="text-xl select-none">Auxiliar de T.I</p>
                </div>
                <img
                  className="absolute top-0 right-0 p-5 select-none"
                  src="./github.svg"
                  alt="icon"
                />
              </Layout.Profile>
              <Layout.Profile
                target="_blank"
                className="flex flex-row-reverse w-full items-center gap-10 bg-black/25 px-5 py-4 rounded-xl hover:bg-black/15 transition-all select-none"
                href="https://github.com/CarolineVarela"
                src="https://avatars.githubusercontent.com/u/144633075?v=4"
              >
                <div>
                  <h2 className="text-2xl select-none">Caroline Varela</h2>
                  <p className="text-xl select-none">Auxiliar de T.I</p>
                </div>
                <img
                  className="absolute top-0 left-0 p-5 select-none"
                  src="./github.svg"
                  alt="icon"
                />
              </Layout.Profile>
            </div>
          </section>
        </Layout.Content>
      </Layout.Structure>
    </>
  );
}
