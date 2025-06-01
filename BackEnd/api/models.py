from django.db import models
from django.contrib.auth.models import User,Group
    
#Modelo de los Usuarios
class UsuariosModelo(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    edad = models.IntegerField()
    nacionalidad = models.CharField(max_length=50)
    
    
#Modelo de las Ubicaciones
class Ubicaciones(models.Model):
    nombre_ubicacion = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=150)
    latitud = models.TextField(default="0")
    longitud = models.TextField()
    
#Modelo de los Comentarios
class Comentarios(models.Model):
    mensaje = models.CharField(max_length=250)
    
#Modelo de las Respuestas
class Respuestas(models.Model):
    mensaje_respuesta = models.CharField(max_length=250)
    
#Modelo de la tabla intermedia de Ubicaciones y Usuarios
class CrearUbicacion(models.Model):
    fecha_creacion = models.DateField
    usuario = models.ForeignKey(UsuariosModelo,on_delete=models.CASCADE)
    ubicacion = models.ForeignKey(Ubicaciones, on_delete=models.CASCADE)
    
#Modelo de la tabla intermedia de Comentarios y Respuestas
class Comentarios_Respuestas(models.Model):
    comentario = models.ForeignKey(Comentarios, on_delete=models.CASCADE)
    respuesta = models.ForeignKey(Respuestas, on_delete=models.CASCADE) 