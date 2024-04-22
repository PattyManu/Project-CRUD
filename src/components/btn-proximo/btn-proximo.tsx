import './btn-proximo.css';

interface BtnProximoProps {
    handelSignUp: () => void;
}

export default function BtnProximo({ handelSignUp }: BtnProximoProps) {
    return (
        <>
            <button className="btn-proximo" onClick={handelSignUp}>
                Próximo
            </button>
        </>
    )
}