from django.urls import path
from .views import  CrearUsuarioView, DesactivarUsuarioView, EditarUsuarioView, LoginView,ListarUsuariosView

urlpatterns = [
    path('users/',CrearUsuarioView.as_view(), name='user-crear'),
    path('users/listar',ListarUsuariosView.as_view(), name='listar-crear'),
    path('users/<int:id>/desactivar',DesactivarUsuarioView.as_view(), name='users-desactivar'),
    path('users/<int:id>/editar',EditarUsuarioView.as_view(), name='users-editar'),
    path('users/login/',LoginView.as_view(), name='users-listar-crear'),
]