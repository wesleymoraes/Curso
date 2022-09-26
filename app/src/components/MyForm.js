import { useState } from 'react';

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')


    console.log(name, email, bio, role)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario")

        setName("");
        setEmail("");
        setBio("");
        setRole("");


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:
                        <input
                            type="text"
                            name='name'
                            placeholder='Digite seu nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>

                    <label>E-mail:
                        <input
                            type="Email"
                            name='Email'
                            placeholder='Digite seu E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </label>

                    <label>
                        <span>Bio:</span>
                        <textarea 
                        name="bio" 
                        placeholder='Descrição do usuário'  
                        onChange={(e) => setBio(e.target.value)} 
                        value={bio} ></textarea>
                    </label>

                    <label>
                        <span>Função no Sistema</span>
                        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                            <option value="user">Usuario</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="enviar" />


            </form>

        </div>
    );
}

export default MyForm;
