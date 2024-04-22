import Image from 'next/image'
import './btn-voltar.css'


export default function BtnVoltar() {
    return (
        <>
            <button className='btn-voltar'>
                <Image src='./arrow-left-svgrepo-com.svg' alt='Seta para esquerda' width={15} height={15} />
                Anterior
            </button>
        </>
    )
}