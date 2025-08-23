import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { PatchUser } from '../services/UsersServices';

function ModalPerfillUsuario({show, onClose}) {
      const preset_name = "usuario";                        
          const cloud_name = "doaeh7hcj"                          
      
          const [ image, setImage ] = useState(''); 
          const [ banner, setBanner] = useState('')     
          const [ loading, setLoading ] = useState(false) 
        
      
          const subirImagen = async (e)=>{            
              const files = e.target.files            
              const data = new FormData()            
              data.append('file', files[0])           
              data.append('upload_preset',preset_name)  
      
              try { 
                  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                      method: 'POST',
                      body: data
                  });
      
                  const file = await response.json();    
                  setImage(file.secure_url);
                  localStorage.setItem('imagen', file.secure_url)
              } catch (error) {
                  console.error('Error uploading image:', error);
                  setLoading(false);
              }
      
          }

             const subirBanner = async (e)=>{            
              const files = e.target.files            
              const data = new FormData()            
              data.append('file', files[0])           
              data.append('upload_preset',preset_name)  
      
              try { 
                  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                      method: 'POST',
                      body: data
                  });
      
                  const file = await response.json();    
                  setBanner(file.secure_url);
                  localStorage.setItem('imagen', file.secure_url)
              } catch (error) {
                  console.error('Error uploading image:', error);
                  setLoading(false);
              }
      
          }

          async function cargar(id) {
            const obj = {
              img :image,
              banner : banner
            }
            console.log(obj);
            
            const serverResponse = await PatchUser(obj, id)
          }

  return (
    <>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personalizar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Foto de perfil</Form.Label>
              <Form.Control
                type="file"
                onChange={subirImagen}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto del Banner</Form.Label>
              <Form.Control type='file' 
              onChange={subirBanner}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger
          " onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={()=>cargar(localStorage.getItem('id_usuario'))}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPerfillUsuario;