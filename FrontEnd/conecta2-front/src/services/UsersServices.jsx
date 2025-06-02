
async function PostRegister(obj) {


    try {
        const response = await fetch("http://127.0.0.1:8000/api/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error('Error fetching Usuarios');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Usuarios', error);
        throw error;
    }

}

async function PostLogin(obj) {


    try {
        const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error('Error al hacer el Login');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la peticion', error);
        throw error;
    }
}

async function GetUsuarios() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/users/listar/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Error obteniendo usuarios');
        }

        return data;

    } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
        throw error;
    }
}

async function GetUsuariosUnico() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/users/unico/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Error obteniendo usuarios');
        }

        return data;

    } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
        throw error;
    }
}

async function DeleteUser(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error deleting user with id`);
        }
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

async function PathData(obj) {


    try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/desactivar/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error('Error al hacer el Login');
        }
        const respuesta = await response.json()
        console.log(respuesta);
        return respuesta

    } catch (error) {
        console.error('Error en la peticion', error);
        throw error;
    }

}

async function PatchUser(obj,id) {


    try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/editar/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error('Error al hacer el Login');
        }
        const respuesta = await response.json()
        console.log(respuesta);
        return respuesta

    } catch (error) {
        console.error('Error en la peticion', error);
        throw error;
    }

}

export { PostRegister, PostLogin, GetUsuarios,DeleteUser,PathData,PatchUser }