from django.urls import path
from .views import  CrearUsuarioView, DesactivarUsuarioView, EditarUsuarioView, LoginView, ListarUsuariosView,UsuariosDetailView, UbicacionesListCreateView, UbicacionesDetailView,ListarUsuarioUnicoView,ListarUnicaUbicacion,RolesView, EditarRolesView,AnunciosUpdateView,AnunciosDeleteView,AnunciosListCreateView, ComentariosListCreateView, ComentariosDetailView,RespuestasListCreateView, RespuestasDetailView

urlpatterns = [
    path('users/',CrearUsuarioView.as_view(), name='user-crear'),
    path('users/<int:pk>/',UsuariosDetailView.as_view(), name='users-eliminar-actualizar'),
    path('users/listar/',ListarUsuariosView.as_view(), name='listar'),
    path('users/unico/<int:user_id>/',ListarUsuarioUnicoView.as_view()),
    path('users/desactivar/',DesactivarUsuarioView.as_view(), name='users-desactivar'),
    path('users/<int:id>/editar/',EditarUsuarioView.as_view(), name='users-editar'),
    path('users/login/',LoginView.as_view(), name='users-listar-crear'),
    path('ubicaciones/',UbicacionesListCreateView.as_view(), name='ubicaciones-crear-listar'),
    path('ubicaciones/<int:pk>/',UbicacionesDetailView.as_view(), name='users-editar-eliminar'),
    path('ubicaciones/unica/<int:id>/',ListarUnicaUbicacion.as_view()),
    path('roles/',RolesView.as_view(), name='roles-crear'),
    path('roles/editar/<str:username>/',EditarRolesView.as_view()),
    path('anuncios/',AnunciosListCreateView.as_view(), name='roles-crear'),
    path('anuncios_eliminar/<int:id>/',AnunciosDeleteView.as_view(), name='anuncios-eliminar-actualizar'),
    path('anuncios_actualizar/<int:id>/',AnunciosUpdateView.as_view(), name='anuncios-eliminar-actualizar'),
    path('comentarios/',ComentariosListCreateView.as_view(), name='comentarios-crear-listar'),
    path('comentarios/<int:id>/',ComentariosDetailView.as_view(), name='comentarios-eliminar-actualizar'),
    path('respuestas/',RespuestasListCreateView.as_view(), name='resouestas-crear-listar'),
    path('respuestas/<int:id>/',RespuestasDetailView.as_view(), name='comentarios-eliminar-actualizar'),
]