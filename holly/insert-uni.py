import pymongo
import json
from requests import get
from bs4 import BeautifulSoup

def float_cast(item):
    if item.find('.')!=-1:
        return float(item)
    elif item.find('.')==-1:
        return int(item)

def num_cast(item):
    try:
        return float_cast(item)
    except ValueError:
        return item

# urls
url_shanghai = 'http://www.shanghairanking.com/ARWU2018.html'
url_THE = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/world_university_rankings_2019_limit0_7216a250f6ae72c71cd09563798a9f18.json'
url_THE_cs ='https://www.timeshighereducation.com/sites/default/files/the_data_rankings/computer_science_rankings_2019_limit0_cd2ac383e6941d14a6f03236a3d78ada.json'
url_THE_eng = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/engineering_technology_rankings_2019_limit0_f8ee736742bd112c8fb640463353ae04.json'
url_THE_clin = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/clinical_pre_clinical_health_ran_2019_limit0_4f3cf32fae2f7c405d9d8ed82a3e95ee.json'
url_THE_life = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/life_sciences_rankings_2019_limit0_b6f41c1f7231e6c857d6e0d2d0075698.json'
url_THE_phys = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/physical_sciences_rankings_2019_limit0_31c8999a215e9c506e571b7994b11985.json'
url_THE_psy = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/psychology_rankings_2019_limit0_bffa04c8b1fe3affa226a159b41b3f50.json'
url_THE_arts = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/arts_humanities_rankings_2019_limit0_2a6b2b0ec5711c3f47a30c7797e8ed4d.json'
url_THE_edu = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/education_rankings_2019_limit0_4b89ac62b9312a8e64229b00506e096c.json'
url_THE_law = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/law_rankings_2019_limit0_401a7d439cc436f6bb1e74d980f075cf.json'
url_THE_socsci = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/law_rankings_2019_limit0_401a7d439cc436f6bb1e74d980f075cf.json'
url_THE_bus = 'https://www.timeshighereducation.com/sites/default/files/the_data_rankings/business_economics_rankings_2019_limit0_109245b662bec3e0ec5a1a61189daa7b.json'

# html request
response = get(url_shanghai)
html_soup = BeautifulSoup(response.text, 'html.parser')
uni_containers = html_soup.find('table')
uni_data = uni_containers.findAll('tr')

list_of_rows = []
for row in uni_containers.findAll('tr'):
    list_of_cells = []
    for cell in row.findAll(["div","td"]):
        text = cell.text
        list_of_cells.append(text)
    list_of_rows.append(list_of_cells)
list_of_rows.pop(0)

#mongodb

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["findu-db"]
col_uni_all = mydb["results_uni"]
#col_city = mydb["results_city"]
#col_uni_cs
#col_uni_eng
#col_uni_clin
#col_uni_phys
#col_uni_psy
#col_uni_arts
#col_uni_edu
#col_uni_law
#col_uni_socsci
#col_uni_bus

#THE
response = get(url_THE)
THE_data = json.loads(response.text)
THE_data == response.json()
mylist = []
stringlist = ["rank", "scores_citations", "scores_industry_income", "scores_international_outlook", "scores_overall", "scores_research", "scores_teaching", "stats_student_staff_ratio"]



#creating the list to insert
for p in THE_data['data']:
    for val in stringlist:
        mylist.append(val + ': ' + p[val])
    mylist.append('stats_pc_intl_students: ' + str(p['stats_pc_intl_students']).replace('%', '') )
    mylist.append('stats_number_students: ' + str(p['stats_number_students']).replace(',', '') )
    mylist.append('stats_female_male_ratio: ' + str(p['stats_female_male_ratio']).split()[0]  )
    for item in list_of_rows:
        if item[1].lower() == p['name'].lower():
            mylist.append('s_rank: ' + item[0] )
            mylist.append('s_rank_country: ' + item[3])

print(mylist[0])

mylist2 = []
for p in THE_data['data']:
    mylist2.append( p['name'])
    mylist2.append( p['location'])
    for val in stringlist:
        mylist2.append(num_cast(p[val]))
    mylist2.append( num_cast(str(p['stats_pc_intl_students']).replace('%', '')) )
    mylist2.append( num_cast(str(p['stats_number_students']).replace(',', '') ))
    mylist2.append( num_cast(str(p['stats_female_male_ratio']).split()[0]  ))
    mylist2.append('null')
    mylist2.append('null')
    for item in list_of_rows:
        if item[1].lower() == p['name'].lower():
            del mylist2[-1]
            del mylist2[-1]
            mylist2.append( num_cast(item[0]) )
            mylist2.append( num_cast(item[3]) )

newlist = []
size = len(stringlist)
size +=5

stringlist.insert(0, "name")
stringlist.insert(1, "location")
stringlist.append("stats_pc_intl_students")
stringlist.append("stats_number_students")
stringlist.append("stats_female_male_ratio")
stringlist.append("s_rank")
stringlist.append("s_rank_country")


d = {}
dlist = []
i=0
j=0
for val in range(0, len(mylist2)-len(stringlist), len(stringlist)):
    d = {}
    for i in range(0,len(stringlist)):
        d['id'] = j
        d[stringlist[i]] = mylist2[i+val]
    dlist.append(d)
    j+=1
print(dlist)

#x = col_uni_all.delete_many({})

for item in dlist:
    col_uni_all.insert(item)


