import numpy
from django.shortcuts import render
from django.db.models import Max
# Create your views here.


from results.models import Uni
from results.models import Uni_cs
from results.models import Uni_eng

def gen_rank(fields, scores, Subject):
    score_val=[]
    rank_val=[]
    fields.append('new_rank')
    for e in Subject.objects.values_list(*fields):
        val=0
        for i in range(0, len(fields)-1):
            val += float(scores[i]) * float(e[i])
        score_val.append(val)
    count=0
    rank_val = len(score_val) -numpy.argsort(numpy.argsort(numpy.array(score_val)))
    rank_val = rank_val.tolist()
    for e in Subject.objects.all():
#        e.new_rank = score_val[count] / len(fields)
        e.new_rank = rank_val[count]
        e.save(update_fields=['new_rank'])
        count+=1
    return

def get_max(query, field):
    return query.aggregate(Max(field))

def index(request, template_name='index.html'):
    """View function for home page of site."""

    context_dict = {}
    model = Uni
    column_headers = ['rank', 'name', 'location', 'scores_overall']
    uni_main = Uni.objects.values(*column_headers)
    uni_all = Uni.objects.all()

    # subject filter
    if request.GET.get('sub_drop'):
        subject_filter = request.GET.get('sub_drop')
        if subject_filter == 'All':
            uni_main = Uni.objects.values(*column_headers)

        elif subject_filter == 'Computer Science':
            model = Uni_cs
            uni_main = Uni_cs.objects.values(*column_headers)
        elif subject_filter == 'Engineering':
            model = Uni_eng
            uni_main = Uni_eng.objects.values(*column_headers)
    else:
        uni_main = Uni.objects.values(*column_headers)


    # Locations filter
    if request.GET.get('loc_drop'):
        location_filter = request.GET.get('loc_drop')
        if location_filter == 'All':
            listings = uni_main

        else:
            listings = uni_main.filter(location=location_filter)
    else:
        listings = uni_main

    # column show/hide
    qs = listings
    if request.GET.getlist('checks[]'):
        checkvar = request.GET.getlist('checks[]')
        if len(checkvar) != 0:
            values = column_headers + checkvar
            qs = listings.values(*values)
            if request.GET.getlist('v_scores[]'):
                scorevar = request.GET.getlist('v_scores[]')
                gen_rank(checkvar,scorevar,model)
                column_headers[0] = 'new_rank'
                values = column_headers + checkvar
                qs = listings.values(*values).order_by('new_rank')
    listings = qs


    context_dict = {'uni_list': listings, 'loc_list' : Uni.objects.order_by('location').values_list('location', flat=True).distinct()}

    # Render the HTML template index.html with the data in the context variable
#    return render(request, 'index.html', context=context)
    return render(request, template_name, context_dict)


from django.views import generic

#class UniListView(generic.ListView):

#    model = Uni
#    context_object_name = 'uni_list'   # your own name for the list as a template variable
#    queryset = Uni.objects.filter(name__icontains='test')[:5] # Get 5 books containing the title war
#    template_name = 'unis/uni_template_list.html'  # Specify your own template name/location

