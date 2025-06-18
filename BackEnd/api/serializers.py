from rest_framework import serializers
from .models import Ubicaciones,Comentarios,Respuestas,UsuariosModelo,Anuncios
from django.contrib.auth.models import User, Group
 
class UbicacionesSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source = 'usuario.username', read_only = True)
    class Meta:
        model = Ubicaciones
        fields = ['username','id','descripcion','nombre_ubicacion','latitud','longitud']
        
class ComentariosSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source = 'usuario.username', read_only = True)
    class Meta:
        model = Comentarios
        fields = ['id','mensaje','username','usuario']
        
class RespuestasSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='usuario.username', read_only=True)
    
    class Meta:
        model = Respuestas
        fields = ['id', 'mensaje_respuesta', 'username', 'fecha' ,'comentario','usuario']
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','email']
        
    
        
class UsuarioModeloSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source='user.id', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    class Meta:
        model = UsuariosModelo
        fields = ["id",'user_id','username', 'first_name', 'last_name', 'email', 'edad', 'nacionalidad','img','banner']
        
class AnunciosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anuncios
        fields = "__all__"
        
