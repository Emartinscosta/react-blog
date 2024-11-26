import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";

function Login() {
    const { handleSubmit, register } = useForm();

    function enviarFormulario(dados) {
        console.log("Formulário Enviado!");
        console.log(dados);
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>

            <form onSubmit={handleSubmit(enviarFormulario)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        {...register("email", { required: true, minLength: 10, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}   />
                </div>

                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        {...register("senha", { required: true, minLength: 6 })}
                    />
                </div>

                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
