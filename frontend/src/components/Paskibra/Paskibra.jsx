import React from 'react'
import Image from 'next/image'

const Paskibra = () => {
  return (
    <>
    <div>
        <h1 className='text-center font-bold mt-6 text-2xl'>PASKIBRA</h1>
        <hr className=' flex w-3/5 h-0.5 mt-6 bg-black' />
    </div>
    <div className='mt-8 flex justify-center'>
    <Image src="/anime.jpg" width={1300} height={200} alt='Awal' />
    </div>
    <div className="flex justify-between">
      <div className="w-1/3 p-4">
        <img src ="/anime.jpg" alt='gambar1' />
      </div>
      <div className="w-1/3 p-4">
      <img src ="/anime.jpg" alt='gambar2' />
      </div>
      <div className="w-1/3 p-4">
      <img src ="/anime.jpg" alt='gambar3' />
      </div>
    </div>

    <div className='justify-center mt-6'>
        <p className='mb-6 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className='text-left'>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
         consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
         nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
    </div>

     <div className='mt-8 text-center shadow-xl shadow-black opacity-100'>
        <h1 className='font-extrabold text-2xl'>PRESTASI</h1>

        <div className="flex justify-center ">
      <div className="rounded-xl border-2 w-52 h-52 m-4 ">
        <div className='flex justify-center'>
        <Image src="/piala2.png" width={50} height={50}/>
        </div>
        <h2 className='font-extrabold mt-2'>
            (2018, Tingkat Kota Surakarta)
        </h2>
        <p className='mt-2'>
            Juara III Lomba Kompetensi Siswa (LKS) Bidang Lomba IT Software Application
        </p>
        </div>

      <div className="rounded-xl border-2 w-52 h-52 m-4 ">
      <div className='flex justify-center'>
        <Image src="/piala2.png" width={50} height={50}/>
        </div>
        <h2 className='font-extrabold mt-2d'>
            (2018, Tingkat Kota Surakarta)
        </h2>
        <p className='mt-2'>
            Juara III Lomba Kompetensi Siswa (LKS) Bidang Lomba IT Software Application
        </p>
        </div>

      <div className="rounded-xl border-2 w-52 h-52 m-4 ">
        <div className='flex justify-center'>
        <Image src="/piala2.png" width={50} height={50}/>
        </div>
        <h2 className='font-extrabold mt-2'>
            (2018, Tingkat Kota Surakarta)
        </h2>
        <p className='mt-2'>
            Juara III Lomba Kompetensi Siswa (LKS) Bidang Lomba IT Software Application
        </p>
        </div>

      <div className="rounded-xl border-2 w-52 h-52 m-4 ">
        <div className='flex justify-center'>
        <Image src="/piala2.png" width={50} height={50}/>
        </div>        
        <h2 className='font-extrabold mt-2d'>
            (2018, Tingkat Kota Surakarta)
        </h2>
        <p className='mt-2'>
            Juara III Lomba Kompetensi Siswa (LKS) Bidang Lomba IT Software Application
        </p>
        </div>
      
    </div>
     </div>
    </>
  )
}

export default Paskibra