"use client"
import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const GeneratePDF = dynamic(() => import("@/components/gerador-pdf/pdf"), { ssr: false });
const Teste = () => {
    const myRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (myRef.current) {
            myRef.current.classList.add('container-home');
        }
    }, []);
    return (<div className="main">
        <div className="content" ref={myRef}>
            <h1>Hello PDF</h1>
            <p id="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam animi, molestiae quaerat assumenda neque culpa ab aliquam facilis eos nesciunt! Voluptatibus eligendi vero amet dolorem omnis provident beatae nihil earum!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, est. Magni animi fugit voluptates mollitia officia libero in. Voluptatibus nisi assumenda accusamus deserunt sunt quidem in, ab perspiciatis ad rem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium reprehenderit, quasi dolorum deserunt, nisi dolores quae officiis odio vel natus! Pariatur enim culpa velit consequatur sapiente natus dicta alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores error laudantium corporis sunt earum incidunt expedita quo quidem delectus fugiat facilis quia impedit sit magni quibusdam ipsam reiciendis quaerat!
            </p>
        </div>
        <GeneratePDF html={myRef} />
    </div>);
}

export default Teste;
