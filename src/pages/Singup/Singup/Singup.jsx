import { useForm } from "react-hook-form";
import { salvarUs, buscarUs, removerUs, editarUs } from "../../../firebase/firestore";
import { useEffect, useState } from "react";


function Signup() {
    const [usuarios, setUsuarios] = useState([]);
    const { handleSubmit, register, reset } = useForm();

    async function SalvarUsuario(dados) {
        await salvarUs(dados);
        reset();
        buscarUsuario();
    }

    async function buscarUsuario(id) {
        const usuarios = await buscarUs(id);
        setUsuarios(usuarios);
    }

    async function removerUsuario(id) {
        await removerUs(id);
        buscarUsuario(); 
    }

    async function editarUsuario(id) { 
      const nome = window.prompt("Digite o Nome:");
      const email = window.prompt("Digite o Email:");
      if (nome && email) {
        const dados = {nome, email};
        await editarUs(id, dados);
        buscarUsuario();
      }

    } 

      

    useEffect(() => {
        buscarUsuario();
    }, []);

    return (
        
            <form onSubmit={handleSubmit(SalvarUsuario)}>
                <h1>Cadastre-se</h1>

                <table border="2">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Excluir</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((us) => (
                            <tr key={us.id}>
                                <td>{us.id}</td>
                                <td>{us.nome}</td>
                                <td>{us.email}</td>
                                <td>
                                    <button type="button" onClick={() => removerUsuario(us.id)}> Excluir </button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => editarUsuario(us.id)}> Editar </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <br />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" {...register("nome")} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                </div>
                <br />
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" {...register("senha")} />
                </div>
                <br />
                <button type="submit">Criar</button>
            </form>
        
    );
}

export default Signup;
