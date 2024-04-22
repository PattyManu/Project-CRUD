import Image from "next/image";
import "./styles.css";

export default function Header() {
    return (
        <header>
            <div className="container">
            <div 
            className="logo">
            <Image src='./marca-taugor.svg' alt="Marca Taugor" width={120} height={120} />
            </div>
            <div 
            className="texto">
                <div className="nav">
                <span>PASSO 2 DE 6</span>
                <strong>Informação de Contato</strong>
                </div>
            </div>
            </div>
             <div className="footer">
              <div className="login"></div>
             </div>

        </header>
    );
}
