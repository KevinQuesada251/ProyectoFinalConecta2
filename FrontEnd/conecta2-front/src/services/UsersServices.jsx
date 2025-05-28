
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
        const response = await fetch("http://127.0.0.1:8000/api/users/listar", {
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

export { PostRegister, PostLogin, GetUsuarios }