# Generated by Django 4.1 on 2023-06-07 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("classroom", "0006_question_maximum_marks"),
    ]

    operations = [
        migrations.AddField(
            model_name="quiz",
            name="total_marks",
            field=models.DecimalField(decimal_places=2, default=4, max_digits=6),
        ),
    ]
