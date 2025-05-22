from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Ubicaciones,Comentarios,Respuestas
from .serializers import UbicacionesSerializer,ComentariosSerializer,RespuestasSerializer
from django.contrib.auth.models import User,Group
from rest_framework.views import APIView
from .models import UsuariosModelo
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,login

    
    
class UbicacionesListCreateView(ListCreateAPIView):
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class UbicacionesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class ComentariosListCreateView(ListCreateAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer
    
class ComentariosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer
    
class RespuestasListCreateView(ListCreateAPIView):
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializer
    
class RespuestasDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializer
    


class CrearUsuarioView(APIView):
    def post(self,request):
        print(request.data)
        username = request.data.get("username")
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        password = request.data.get("password")
        email = request.data.get("email")
        edad = request.data.get("edad")
        nacionalidad = request.data.get("nacionalidad")
        
        #Validaciones
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'El nombre de usuario ya existe'},status=400)
        
        if User.objects.filter(email=email).exists():
            return Response({'error':'El email ya existe'},status=400)
        
        if not email or not password:
            return Response({'error':'El email y la contraseña son obligatorios'},status=400)
        
        if len(password) < 7:
            return Response({'error':'La contraseña debe tener al menos 8 caracteres'},status=400)
        
        if not edad or not nacionalidad:
            return Response({'error':'La edad y la nacionalidad son obligatorios'},status=400)
        
        
        user = User.objects.create_user(
            username=username,
            first_name = first_name,
            last_name=last_name,
            password=password,
            email=email,
        )
        group = Group.objects.get(name='Usuario')
        user.groups.add(group)
        
        UsuariosModelo.objects.create(
            user=user,
            edad=edad,
            nacionalidad=nacionalidad
        )
        
        return Response({'mensaje':'Usuario creado'},status=201)
    
class DesactivarUsuarioView(APIView):
    def patch(self, request, id):
        
        usuario = User.objects.get(id=id)
        usuario.is_active = False
        usuario.save()
        
        return Response({'mensaje':'Usuario desactivado correctamente'}, status=204)
       


class EditarUsuarioView(APIView):
    def patch(self, request, id):
        try:
            usuario = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        # Actualizar campos básicos
        data = request.data
        if data.get("username"):
            usuario.username = data["username"]
        if data.get("first_name"):
            usuario.first_name = data["first_name"]
        if data.get("last_name"):
            usuario.last_name = data["last_name"]
        if data.get("email"):
            usuario.email = data["email"]
        if data.get("password"):
            usuario.set_password(data["password"])  # encripta la contraseña

        usuario.save()

        # Actualizar modelo extendido
        try:
            extras = UsuariosModelo.objects.get(user_id = usuario.id)
        except UsuariosModelo.DoesNotExist:
            return Response({'error': 'Datos adicionales del usuario no encontrados'}, status=status.HTTP_404_NOT_FOUND)

        if data.get("edad"):
            extras.edad = data["edad"]
        if data.get("nacionalidad"):
            extras.nacionalidad = data["nacionalidad"]

        extras.save()

        return Response({'mensaje': 'Usuario actualizado correctamente'}, status=status.HTTP_200_OK)
    

class LoginView(APIView):
    def post(self, request):
         username = request.data.get("username")
         password = request.data.get("password")
         
         user = authenticate(request, username=username, password = password)
         if user is not None:
             login(request, user) #crea una sesion activa
             return Response({"mensaje":"Inicio exitoso"}, status=200)
         else:
             return Response({"error":"Invalido"},status=401)
    
    
    
         
        
        