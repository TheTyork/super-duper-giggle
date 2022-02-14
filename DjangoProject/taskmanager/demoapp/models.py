from django.db import models

# Create your models here.
class page(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title


class tab(models.Model):
    title = models.CharField(max_length=30)
    page = models.ForeignKey(page,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class group(models.Model):
    title = models.CharField(max_length=30)
    tab = models.ForeignKey(tab,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class param(models.Model):
    name = models.CharField(max_length=30)
    value = models.CharField(max_length=30)
    si = models.CharField(max_length=30)
    group = models.ForeignKey(group,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
