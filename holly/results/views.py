from django.shortcuts import render

# Create your views here.


from results.models import Uni

def index(request, template_name='index.html'):
    """View function for home page of site."""

    context_dict = {}
    model = Uni

    # Locations filter
    if request.GET.get('loc_drop'):
        location_filter = request.GET.get('loc_drop')
        if location_filter == 'All':
            listings = Uni.objects.values('rank', 'name', 'location')

        else:
            listings = Uni.objects.filter(location=location_filter).values('rank', 'name', 'location')
    else:
        listings = Uni.objects.values('rank', 'name', 'location')

    

    columns_list = ['scores_research', 'scores_citations', 'scores_teaching']

    
    if request.GET.getlist('checks[]'):
        checkvar = request.GET.getlist('checks[]')
        for i in range (0,len(checkvar)-1):
            print(checkvar[i])
            qs1 = Uni.objects.values(checkvar[i])
            qs2 = Uni.objects.values(checkvar[i+1])
            qs1.union(qs2, qs1, all=True)
            print(qs1)

    print(listings)
    test = Uni.objects.values('rank', 'name', 'location','scores_teaching')

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

