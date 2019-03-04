from django.db import models

# Create your models here.

from django.db import models
  
# Create your models here.

class Uni(models.Model):
    name = models.CharField(max_length=100)
    rank = models.IntegerField()
    scores_overall = models.FloatField(verbose_name='Overall Score')
    scores_teaching = models.FloatField()
    scores_research = models.FloatField()
    scores_citations = models.FloatField()
    scores_industry_income = models.FloatField()
    scores_international_outlook = models.FloatField()
    location = models.CharField(max_length=100)
    stats_number_students = models.IntegerField()
    stats_student_staff_ratio = models.IntegerField()
    stats_pc_intl_students = models.IntegerField()
    stats_female_male_ratio = models.FloatField()
    s_rank = models.IntegerField()
    s_rank_country = models.IntegerField()

    def __str__(self):
        return self.name

class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    language =  models.CharField(max_length=100)
    cost_of_living = models.IntegerField()
    low_temp = models.IntegerField()
    high_temp = models.IntegerField()
    annual_rainfall = models.FloatField()
    cost_of_rent = models.IntegerField()


