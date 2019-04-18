# Generated by Django 2.2 on 2019-04-17 23:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myBlog', '0002_auto_20190417_2222'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
                ('description', models.CharField(max_length=250)),
                ('content', models.TextField(max_length=60000)),
                ('author', models.CharField(max_length=50)),
                ('published_date', models.DateTimeField(auto_now_add=True)),
                ('visit_time', models.PositiveIntegerField(default=0)),
                ('post_image', models.ImageField(max_length=3000, upload_to='%Y%m%d')),
                ('post_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myBlog.Category')),
            ],
            options={
                'ordering': ['-published_date'],
            },
        ),
        migrations.DeleteModel(
            name='Article',
        ),
    ]