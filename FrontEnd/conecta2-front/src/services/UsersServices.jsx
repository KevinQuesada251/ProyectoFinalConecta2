
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

export { PostRegister, PostLogin }