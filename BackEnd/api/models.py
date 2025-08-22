from django.db import models
from django.contrib.auth.models import User,Group
    
#Modelo de los Usuarios
class UsuariosModelo(models.Model):
    PROVINCIAS_CHOICES = [
        ("alajuela","ALAJUELA"),
        ("cartago","CARTAGO"),
        ("heredia","HEREDIA"),
        ("san josé","SAN JOSÉ"),
        ("limón", "LIMÓN"),
        ("guanacaste","GUANACASTE"),
        ("puntarenas","PUNTARENAS")
    ]
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    edad = models.IntegerField()
    img = models.CharField(max_length=300, default="")
    banner = models.CharField(max_length=300, default="")
    provincia = models.CharField(choices=PROVINCIAS_CHOICES,max_length=100)    
    
#Modelo de las Ubicaciones
class Ubicaciones(models.Model):
    
    INTENSIDAD_CHOICES = [
        ("baja","BAJA"),
        ("media","MEDIA"),
        ("alta","ALTA")
    ]
      
    fecha_creacion = models.DateField(auto_now_add=True)
    nombre_ubicacion = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=150)
    latitud = models.TextField(default="")
    longitud = models.TextField()
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    #cambios recientes del modelo
    velocidad = models.CharField(max_length=50)
    capacidad_usuarios = models.IntegerField(default=0)
    intensidad = models.CharField(choices=INTENSIDAD_CHOICES,max_length=50)
    
    
#Modelo de los Comentarios
class Comentarios(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comentarios')
    mensaje = models.CharField(max_length=250)
    reporte = models.IntegerField(default=0)
    
#Modelo de las Respuestas
class Respuestas(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='respuestas')
    comentario = models.ForeignKey(Comentarios, on_delete=models.CASCADE, related_name='respuestas')
    mensaje_respuesta = models.CharField(max_length=250)
    fecha = models.DateTimeField(auto_now_add=True)
    
    
    
class Anuncios(models.Model):
    GRAVEDAD_CHOICES = [
        ("leve","LEVE"),
        ("grave","GRAVE"),
        ("muy grave", "MUY GRAVE")
    ]
    texto_anuncio = models.TextField()
    hora_anuncio = models.TimeField(auto_now_add=True)
    fecha_anuncio = models.DateField(auto_now_add=True)
    gravedad_anuncio = models.CharField(choices=GRAVEDAD_CHOICES,max_length=50)