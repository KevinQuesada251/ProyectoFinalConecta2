from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, ListAPIView,DestroyAPIView,UpdateAPIView
from .models import Ubicaciones,Comentarios,Respuestas, UsuariosModelo,Anuncios
from .serializers import UbicacionesSerializer,ComentariosSerializer,RespuestasSerializer,UsuarioModeloSerializer,AnunciosSerializer
from django.contrib.auth.models import User,Group
from rest_framework.views import APIView
from .models import UsuariosModelo
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,login
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken    
from rest_framework.permissions import BasePermission,SAFE_METHODS

# Permisos
class Permisos(BasePermission):
    def has_permission(self, request,view):
        usuario = request.user
        
        if not usuario.is_authenticated:
            return False
        
        metodo = request.method
        grupos_usuarios = usuario.groups.values_list('name', flat=True)
        
        if metodo in SAFE_METHODS:
            return True
        
        if "usuario" in grupos_usuarios:
            if metodo in ['POST', 'GET'] or metodo in SAFE_METHODS:
                return True
        
        if "admin" in grupos_usuarios:
            if metodo in ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'] or metodo in SAFE_METHODS:
                return True
            
        if "moderador" in grupos_usuarios:
            if metodo in ['POST', 'PUT', 'PATCH', 'GET'] or metodo in SAFE_METHODS:
                return True
            
        return False
    
# Ubicaciones 
class UbicacionesListCreateView(ListCreateAPIView):
    
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class UbicacionesDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [Permisos]
    queryset = Ubicaciones.objects.all()
    serializer_class = UbicacionesSerializer
    
class ListarUnicaUbicacion(APIView):
   def get(self, request, id):
        
        ubicaciones_usuario = Ubicaciones.objects.filter(usuario=id)
        serializer = UbicacionesSerializer(ubicaciones_usuario, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
 
# Comentarios    
class ComentariosListCreateView(ListCreateAPIView):
    # permission_classes = [Permisos]
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer
    
class ComentariosDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [Permisos]
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer
   
   
 # Respuestas
class RespuestasListCreateView(ListCreateAPIView):
    #permission_classes = [Permisos]
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializer
    
class RespuestasDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [Permisos]
    queryset = Respuestas.objects.all()
    serializer_class = RespuestasSerializer

#Roles
class RolesView(APIView):
    permission_classes = [Permisos]
    def get(self,request):
        users = User.objects.all()
        
        data = []
        for user in users:
            data.append({
                "user_id": user.id,
                "username": user.username,
                "groups": [group.name for group in user.groups.all()]

            })
        return Response(data)   
    
    

        
class EditarRolesView(APIView):
    def patch(self, request, id):
        rol = request.data.get('name')

        if not id or not rol:
            return Response({'error': 'Se requiere id y name (grupo)'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        try:
            group = Group.objects.get(name=rol)
        except Group.DoesNotExist:
            return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        user.groups.clear()  # O eliminar solo si ya está en uno
        user.groups.add(group)
        user.save()

        return Response({
            'message': f'Se asignó el grupo "{rol}" al usuario con ID {id} correctamente.'
        }, status=status.HTTP_200_OK)
        
#Usuario
class UsuariosModeloListView(ListAPIView):
    permission_classes = [Permisos]
    queryset = UsuariosModelo.objects.all()
    serializer_class = UbicacionesSerializer
    
class ListarUsuariosView(ListAPIView):
    permission_classes = [Permisos]
    queryset = UsuariosModelo.objects.select_related('user').all()
    serializer_class = UsuarioModeloSerializer
    
class ListarUsuarioUnicoView(RetrieveUpdateDestroyAPIView):
    permission_classes = [Permisos]
    lookup_field = "user_id"
    queryset = UsuariosModelo.objects.select_related('user').all()
    serializer_class = UsuarioModeloSerializer
    
class UsuariosDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [Permisos]
    queryset = UsuariosModelo.objects.select_related('user').all()
    serializer_class = UsuarioModeloSerializer
    
    
# Vista con APIView
        

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
        
        if len(password) < 8:
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
    def patch(self, request):
        user_id = request.data.get("id")
        if user_id is None:
            return Response({"error": "ID de usuario no proporcionado"}, status=status.HTTP_400_BAD_REQUEST)

        user = get_object_or_404(User, id=user_id) #Busca un usuario con el ID proporcionado. Si no existe, lanza un error 404 automáticamente
        user.is_active = not user.is_active
        user.save()
        return Response({'mensaje': 'Usuario desactivado correctamente'}, status=status.HTTP_200_OK)


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
        if data.get("img"):
            extras.img = data["img"]
        if data.get("banner"):
            extras.banner = data["banner"]

        extras.save()

        return Response({'mensaje': 'Usuario actualizado correctamente'}, status=status.HTTP_200_OK)
    

class LoginView(APIView):
    def post(self, request):
         username = request.data.get("username")
         password = request.data.get("password")
         
         user = authenticate(request, username=username, password = password)
         if user is not None:
             login(request, user) #crea una sesion activa
             id = user.id
             token = str(AccessToken.for_user(user))
             refresh = str(RefreshToken.for_user(user)) 
             rol = str(user.groups.first()) #firts es un método de Django que se usa sobre QuerySets para obtener el primer elemento del resultado.
                       
             return Response({"mensaje":"Inicio exitoso",
                              "id":id,
                              "token":token,
                              "refresh": refresh,
                              "rol": rol
                              }, status=200)
         else:
             return Response({"error":"Invalido"},status=401)

        
class AnunciosListCreateView(ListCreateAPIView):
    permission_classes=[Permisos]
    queryset = Anuncios.objects.all()
    serializer_class = AnunciosSerializer
    
         
class AnunciosUpdateView(UpdateAPIView):
    lookup_field = "id"
    queryset = Anuncios.objects.all()
    serializer_class = AnunciosSerializer
    
class AnunciosDeleteView(DestroyAPIView):
    lookup_field = "id"
    queryset = Anuncios.objects.all()
    serializer_class = AnunciosSerializer
    
        