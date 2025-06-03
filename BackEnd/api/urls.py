from django.urls import path
from .views import  CrearUsuarioView, DesactivarUsuarioView, EditarUsuarioView, LoginView, ListarUsuariosView,UsuariosDetailView, UbicacionesListCreateView, UbicacionesDetailView,ListarUsuarioUnicoView,ListarUnicaUbicacion

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
]