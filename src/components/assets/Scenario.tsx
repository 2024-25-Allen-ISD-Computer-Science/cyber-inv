import Image from 'next/image';
import map from '~/map.svg' 
import electric from '~/Electric.svg'
import water from '~/Water.svg'
import lines from '~/Lines.svg'

export default function Scenario (){
    return(
        <div className='text-teal-50 mt-[-20px]'>
            <Image src={map} alt='map' height={700} width={900} className='relative z-0'/>
            <Image src={electric} alt='electric' height={700} width={822.5} className='sticky z-20 mt-[-642.5px] ml-[-1px]'/>
            <Image src={water} alt='water' height={700} width={818} className='sticky z-10 mt-[-630px] ml-[3px]'/>
            <Image src={lines} alt='lines' height={700} width={810} className='sticky z-0 mt-[-472.5px] ml-[17px]'/>
        </div>
    )
}