import Image from 'next/image';
import map from '~/map.svg' 

export default function Scenario (){
    return(
        <div className='text-teal-50'>
            <Image src={map} alt='map' height={700} width={900} className=''/>
        </div>
    
 
    )
}