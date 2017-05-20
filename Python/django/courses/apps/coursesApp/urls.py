from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^insert$', views.insert, name='insert'),
    url(r'^verify/(?P<id>\d+)$', views.verify, name='verify'),
    url(r'^delete/(?P<id>\d+)$', views.delete, name='delete'),
]
