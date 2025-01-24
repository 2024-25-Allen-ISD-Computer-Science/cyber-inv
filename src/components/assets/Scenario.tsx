import Image from 'next/image';
import map from '~/map.svg' 
import electric from '~/Electric.svg'
import water from '~/Water.svg'
import lines from '~/Lines.svg'

export default function Scenario (){
    return(
        <div className='text-teal-50'>
            <Image src={map} alt='map' height={700} width={900} className='relative  z-0'/>
            <Image src={electric} alt='electric' height={700} width={822.5} className='fixed z-20 mt-[-642.5px] ml-[-1px]'/>
            <Image src={water} alt='water' height={700} width={818} className='fixed z-10 mt-[-642px] ml-[3.5px]'/>
            <Image src={lines} alt='lines' height={700} width={810} className='fixed z-0 mt-[-487.5px] ml-[17px]'/>
        </div>
    )
}