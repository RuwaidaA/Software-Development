# Generated by Django 2.1.7 on 2019-03-04 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0003_remove_uni_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uni',
            name='scores_overall',
            field=models.FloatField(verbose_name='Overall Score'),
        ),
    ]
