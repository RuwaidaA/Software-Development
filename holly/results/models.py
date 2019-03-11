from django.db import models

# Create your models here.

from django.db import models
  
# Create your models here.

class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    quality_of_life_index = models.FloatField()
    safety_index = models.FloatField()
    climate_index =models.FloatField()
    cost_of_living_index = models.FloatField()
    pass

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
    s_rank = models.IntegerField(null=True)
    s_rank_country = models.IntegerField(null=True)
    new_rank = models.IntegerField(default=0, null=True)
    city = models.CharField(max_length=100, null=True)
    quality_of_life_index = models.FloatField()
    safety_index = models.FloatField()
    climate_index =models.FloatField()
    cost_of_living_index = models.FloatField()

    def __iter__(self):
        for field in self._meta.fields:
            yield (field.verbose_name, field.value_to_string(self))

    def __str__(self):
        return self.name

class Uni_cs(models.Model):
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
    new_rank = models.IntegerField(default=0, null=True)
    city = models.CharField(max_length=100, null=True)
    quality_of_life_index = models.FloatField()
    safety_index = models.FloatField()
    climate_index =models.FloatField()
    cost_of_living_index = models.FloatField()



    def __iter__(self):
        for field in self._meta.fields:
            yield (field.verbose_name, field.value_to_string(self))

    def __str__(self):
        return self.name

class Uni_eng(models.Model):
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
    new_rank = models.IntegerField(default=0, null=True)
    city = models.CharField(max_length=100, null=True)
    quality_of_life_index = models.FloatField()
    safety_index = models.FloatField()
    climate_index =models.FloatField()
    cost_of_living_index = models.FloatField()



    def __iter__(self):
        for field in self._meta.fields:
            yield (field.verbose_name, field.value_to_string(self))

    def __str__(self):
        return self.name


