from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^books/$', views.books, name='books'),
    url(r'^add/$', views.add, name='add'),
    url(r'^addBook/$', views.addBook, name='addBook'),
    url(r'^books/(?P<id>\d+)$', views.bookReview, name='bookReview'),
    url(r'^addReview/(?P<id>\d+)$', views.addReview, name='addReview'),
    url(r'^user/(?P<id>\d+)$', views.user, name='user'),
    url(r'^delete/(?P<id>\d+)$', views.delete, name='delete')
]
