
Instructions

* make sure mongodb is connected
* run: python manage.py makemigrations
* run: python manage.py migrate
* check for db in mongo compass
* cd DataInserts
* run ./set_upDB.sh
* if this fails you may need to drop the old table - python delete-unis.py
* cd ..
* check for data in mongo compass
* run python manage.py runserver
* open link in browser
