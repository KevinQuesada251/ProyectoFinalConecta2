# Generated by Django 5.2 on 2025-05-20 17:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_usuariosmodelo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crearubicacion',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.usuariosmodelo'),
        ),
        migrations.DeleteModel(
            name='Usuarios',
        ),
    ]
