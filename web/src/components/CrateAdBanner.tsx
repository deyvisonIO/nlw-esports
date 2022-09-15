import { MagnifyingGlassPlus } from "phosphor-react";
import { DialogTrigger } from '@radix-ui/react-dialog';

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] py-6 px-8 rounded-lg flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <DialogTrigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-md flex gap-3 items-center"> 
          <MagnifyingGlassPlus size={24} /> 
          Publicar Anúncio
          </DialogTrigger>
        </div>
      </div>
    )
}