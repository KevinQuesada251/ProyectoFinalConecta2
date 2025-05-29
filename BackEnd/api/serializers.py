from rest_framework import serializers
from .models import Ubicaciones,Comentarios,Respuestas,UsuariosModelo
from django.contrib.auth.models import User
 
class UbicacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicaciones
        fields = '__all__'
        
class ComentariosSerializer(serializers.ModelSerializer):
    class Metas:
        model = Comentarios
        fields = '__all__'
        
class RespuestasSerializer(serializers.ModelField):
    class Metas:
        model = Respuestas
        fields = '__all__'
        
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
        fields = ["id",'user_id','username', 'first_name', 'last_name', 'email', 'edad', 'nacionalidad']