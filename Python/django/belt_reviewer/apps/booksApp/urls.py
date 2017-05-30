from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^books/$', views.books, name='books'),
    url(r'^add/$', views.add, name='add'),
    url(r'^addBook/$', views.addBook, name='addBook'),
    url(r'^addReview/$', views.addReview, name='addReview'),
    url(r'^user/$', views.user, name='user'),
]
