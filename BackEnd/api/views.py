from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Roles,Usuarios,Ubicaciones,Comentarios,Respuestas
from .serializers import RolesSerializer,UsuariosSerializer,UbicacionesSerializer,ComentariosSerializers,RespuestasSerializers


class RolesListCreateView(ListCreateAPIView):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer
    
class RolesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer
    
class UsuariosListCreateView(ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    
class UsuariosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    
class UbicacionesListCreateView(ListCreateAPIView):
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class UbicacionesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class ComentariosListCreateView(ListCreateAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializers
    
class ComentariosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializers
    
class RespuestasListCreateView(ListCreateAPIView):
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializers
    
class RespuestasDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializers
