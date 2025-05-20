from rest_framework import serializers
from .models import Roles,Ubicaciones,Comentarios,Respuestas
from django.contrib.auth.models import User

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = '__all__'
        
        
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