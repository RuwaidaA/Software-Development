from django.contrib import admin

# Register your models here.

from results.models import Uni

#admin.site.register(Uni)

class UniAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'rank', 'scores_research')
    list_filter = ('rank', 'scores_research')

admin.site.register(Uni, UniAdmin)
