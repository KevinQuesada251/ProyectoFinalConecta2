from rest_framework import serializers
from .models import Roles,Usuarios,Ubicaciones,Comentarios,Respuestas

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = '__all__'
        
class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
        
class UbicacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicaciones
        fields = '__all__'
        
class ComentariosSerializers(serializers.ModelSerializer):
    class Metas:
        model = Comentarios
        fields = '__all__'
        
class RespuestasSerializers(serializers.ModelField):
    class Metas:
        model = Respuestas
        fields = '__all__'