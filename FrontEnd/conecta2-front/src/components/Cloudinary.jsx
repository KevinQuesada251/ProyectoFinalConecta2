import React from 'react'
import { useState } from 'react'

const Cloudinary = ({}) => {

    const preset_name = "usuario";                        
    const cloud_name = "doaeh7hcj"                          

    const [ image, setImage ] = useState('');       // Creamos estado local que guarde la url de la imagen subida
    const [ loading, setLoading ] = useState(false) 
  

    const uploadImage = async (e)=>{            //2 Preparamos para recibir el evento al ejecutarse la función async
        const files = e.target.files            //3 recuperamos el array de e.target.files
        const data = new FormData()             //4 Creamos/Instanciamos un FormData objeto con nombre data
        data.append('file', files[0])           //5 Utilizando metodo append() agregamos al data el archivo desde files[0]
        data.append('upload_preset',preset_name)  //6 Como prop "upload preset" le pasamos la variable de la linea 6 (punto 16.2).

        setLoading(true)                        //8 Ponemos en true el estado local que indica que la imagen esta cargándose.

        try {
            //10 enviamos el pedido de upload con el data en body 
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });

            const file = await response.json();     //11 Traducimos la respuesta de JSON
            setImage(file.secure_url);
            localStorage.setItem('imagen', file.secure_url)
                          //13 Recuperamos la url de la imagen en estado local
            setLoading(false);
                                  //14 Dejamos el loading en false para que intente mostrar la magen
            //await actions.sendPhoto(file.secure_url) //15 Enviamos la url a un action para hacer algo en back. Lo dejamos bloqueado para que no de error de importacion de Context actions o de la función.
        } catch (error) {
            console.error('Error uploading image:', error);
            setLoading(false);
        }

    }

  return (
    <div>
        <h1>Upload Image</h1>

        {/*1 - El siguiente input type file envia la imagen por el evento al handler uploadImage */}

        <input type="file"
        name="file"
        placeholder='Upload an image'
        // accept='image/png, image/jpeg' 
        onChange={(e)=>uploadImage(e)}
        />

        {/* ------------------------------------------------------------------------------------ */}


      
        {/* ------------------------------------------------------------------------------------ */}

    </div>
  );
}

export default Cloudinary



