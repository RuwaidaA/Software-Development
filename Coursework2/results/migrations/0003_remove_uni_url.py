# Generated by Django 2.1.7 on 2019-03-02 16:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0002_auto_20190302_1441'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uni',
            name='url',
        ),
    ]
