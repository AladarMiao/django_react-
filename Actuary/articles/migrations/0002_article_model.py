# Generated by Django 3.0.3 on 2020-06-23 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='model',
            field=models.TextField(default={'nodes': [{'id': 2, 'title': 'hi', 'x': 223, 'y': 247}]}),
            preserve_default=False,
        ),
    ]