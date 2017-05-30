# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..logRegApp.models import Users

# Create your models here.
class AuthorsDBManager(models.Manager):
    def get_all_authors(self):
        return AuthorsDB.objects.all()
    def create_author(self, data, user_id):
        print 'Create Author'
        unique = AuthorsDB.objects.filter(name=data['add_author'])
        if unique:
            return [False, 'Author ' + data['add_author'] + 'already exists. Choose them from the dropdown menu']
        AuthorsDB.objects.create(name=data['name'], user=Users.objects.get(id=user_id))
        return [AuthorsDB.objects.get(name=data['add_author'])]
    def get_author(self, data):
        return [AuthorsDB.objects.get(name=data['existing_author'])]

class BooksDBManager(models.Manager):
    def create_book(self, data, author_id, user_id):
        if BooksDB.objects.filter(title=data['title']):
            return [False, 'Book ' + data['title'] + ' already exists']
        BooksDB.objects.create(title=data['title'], author=AuthorsDB.objects.get(id=author_id), user=Users.objects.get(id=user_id))
        return [BooksDB.objects.get(title=data['title'])]
    def get_all_books(self):
        return BooksDB.objects.all()

class ReviewsDBManager(models.Manager):
    def create_review(self, data, book_id, user_id):
        ReviewsDB.objects.create(review=data['review'], rating=int(data['rating']), book=BooksDB.objects.get(id=book_id), user=Users.objects.get(id=user_id))

class AuthorsDB(models.Model):
    name = models.CharField(max_length=100)
    users = models.ForeignKey(Users, related_name='users_authors')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = AuthorsDBManager()

class BooksDB(models.Model):
    title = models.TextField()
    author = models.ForeignKey(AuthorsDB, related_name='authors_books', on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='users_books')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BooksDBManager()

class ReviewsDB(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    book = models.ForeignKey(BooksDB, related_name='books_reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='users_reviews', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ReviewsDBManager()

# class Ratings(models.Model):
#     rating = models.IntegerField()
#     review = models.OneToOneField(Reviews, related_name='reviews_ratings', on_delete=models.CASCADE)
#     book = models.ForeignKey(Books, related_name='books_ratings', on_delete=models.CASCADE)
#     user = models.ForeignKey(Users, related_name='users_ratings', on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
