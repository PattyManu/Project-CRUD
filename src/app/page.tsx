'use client';
import api from "@/API/api";
import BtnArredondar from "@/components/btn-arredondar/btn-arredondar";
import BtnVoltar from "@/components/btn-voltar/btn-voltar";
import Header from "@/components/header";
import FormPropsTextFields from "@/components/inputForm";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import './styles.css';
import BtnProximo from "@/components/btn-proximo/btn-proximo";
import dynamic from "next/dynamic";
const GeneratePDF = dynamic(() => import("@/components/gerador-pdf/pdf"), { ssr: false });

export default function app() {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (myRef.current) {
      myRef.current.classList.add('container-home');
    }
  }, []);
  const [formUser, setFormUser] = useState({
    nome: '',
    sobrenome: '',
    emprego: '',
    address: '',
    telefone: '',
    email: '',
    nacionalidade: '',
    aniversario: ''
  });
  async function handelSignUp() {
    try {
      const res = await api.post('/users.json', {
        nome: formUser.nome,
        sobrenome: formUser.sobrenome,
        emprego: formUser.emprego,
        address: formUser.address,
        telefone: formUser.telefone,
        email: formUser.email,
        nacionalidade: formUser.nacionalidade,
        aniversario: formUser.aniversario
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log({ res })

    } catch (error) {
      console.log(error)
    }
  }
  function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {
    setFormUser({ ...formUser, [event.target.name]: event.target.value });
  }
  return (
    <div className="container-home" ref={myRef}>
      <Header />
      <div className="info">
        <strong>Fale-nos um pouco sobre você</strong>
        <span>Diga quem você é, como os empregadores podem entrar em contato com você e
          qual a sua profissão</span>
      </div>
      <div className="pincel">
        <span className="contato">Informação de contato</span>
        <Image src={'./icon-lapis.svg'} alt='lapis' width={15} height={15} />
      </div>
      <div className="form-one">
        <div className="info-user">
          <FormPropsTextFields
            largura={300}
            id="nome-teste"
            info="ex. Tiago"
            label='nome'
            nome='nome'
            placeholder='Nome'
            value={formUser.nome}
            handleChangeForm={(event) => handleChangeForm(event)}
          />
          <FormPropsTextFields
            largura={300}
            info="ex. Souza"
            label='Sobrenome'
            placeholder='Sobrenome'
            nome='sobrenome'
            value={formUser.sobrenome}
            handleChangeForm={(event) => handleChangeForm(event)}
          />
        </div>
        <div className="photo-user">
          <div className="esquerda">
            <Image src={'./profile-svgrepo-com.svg'} alt="Perfil" width={100} height={100} />
          </div>
          <div className="direita">
            <div className="texto">
              <strong>Foto do Perfil</strong>
            </div>
            <div className="addFoto">
              adicionar foto
            </div>
            <div className="botao">
              <BtnArredondar />
            </div>
          </div>
        </div>

      </div>
      <div className="segunda-parteForm">
        <FormPropsTextFields
          info="ex. Vendedor"
          label='Emprego'
          placeholder='Emprego'
          nome='emprego'
          handleChangeForm={(event) => handleChangeForm(event)}
          value={formUser.emprego}
        />
        <FormPropsTextFields
          info="ex. Avenida Paulista, 1.234-São Paulo-SP-07010001"
          label='Endereço'
          placeholder='Endereço'
          nome='address'
          value={formUser.address}
          handleChangeForm={(event) => handleChangeForm(event)}
        />
      </div>
      <div className="terceira-parteForm">
        <FormPropsTextFields
          largura={336}
          info="ex. (11)99123-7676"
          label='Telefone'
          nome='telefone'
          placeholder='Telefone'
          value={formUser.telefone}
          handleChangeForm={(event) => handleChangeForm(event)}
        />
        <FormPropsTextFields
          largura={336}
          info="ex. tiago.souza@email.com"
          label='Email'
          nome='email'
          placeholder='Email'
          value={formUser.email}
          handleChangeForm={(event) => handleChangeForm(event)}
        />
      </div>
      <div className="quarta-parteForm">
        <FormPropsTextFields
          largura={336}
          info="ex. Brasileira"
          label='Nacionalidade'
          placeholder='Nacionalidade'
          nome="nacionalidade"
          value={formUser.nacionalidade}
          handleChangeForm={(event) => handleChangeForm(event)}
        />
        <div>
        </div>
        <FormPropsTextFields
          largura={336}
          info="ex. 23 jun 1985"
          label='Data de nascimento'
          nome='aniversario'
          placeholder='Data de nascimento'
          value={formUser.aniversario}
          handleChangeForm={(event) => handleChangeForm(event)}
        />
      </div>
      <footer>
        <BtnVoltar />
        <button onClick={handelSignUp}>
          login
        </button>
        <GeneratePDF html={myRef} />
        <BtnProximo handelSignUp={handelSignUp} />      </footer>
    </div>
  );
}
