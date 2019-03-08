from django.contrib import admin

# Register your models here.

from results.models import Uni
from results.models import Uni_cs
from results.models import Uni_eng
from results.models import City

#admin.site.register(Uni)

class UniAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'rank', 'scores_research')
    list_filter = ('rank', 'scores_research')

class Uni_csAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'rank', 'scores_research')
    list_filter = ('rank', 'scores_research')

class Uni_engAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'rank', 'scores_research')
    list_filter = ('rank', 'scores_research')

class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'country')
    list_filter = ('id', 'name', 'country')

admin.site.register(Uni, UniAdmin)
admin.site.register(City, CityAdmin)
admin.site.register(Uni_eng, Uni_engAdmin)
admin.site.register(Uni_cs, Uni_csAdmin)
