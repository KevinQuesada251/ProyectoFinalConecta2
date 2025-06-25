const token = localStorage.getItem('token')

async function getData(endpoint) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const usuario = await response.json();
        return usuario;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
//////////LLAMADO POST//////////
async function postData(obj,endpoint) {
   
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

//////////////LLAMADO PATCH/////////////
async function patchData(obj,endpoint,id)
{

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/${id}/`,{
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const datos = await response.json()
        console.log(datos);
        
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

//////////////LLAMADO DELETE/////////////
async function deleteData(endpoint,id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

async function GetUbicacionesUnica(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/ubicaciones/unica/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
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

async function GetBuscarUbicacion(nombre_ubicacion) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/nombre_ubicacion/${nombre_ubicacion}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
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


export default { postData,deleteData,getData,patchData, GetUbicacionesUnica, GetBuscarUbicacion };