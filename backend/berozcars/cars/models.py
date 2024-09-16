from django.db import models

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Model(models.Model):
    name = models.CharField(max_length=50, unique=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Car(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.ForeignKey(Model, on_delete=models.CASCADE)
    car_type = models.CharField(max_length=50)
    max_power = models.IntegerField()
    max_torque = models.IntegerField()
    seats = models.IntegerField()
    status = models.CharField(max_length=50)
    charge_capacity = models.IntegerField()
    charge_range = models.IntegerField()

    def __str__(self):
        return self.model.name
    
class Car_Naming(models.Model):
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    version = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class KeyData(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    mileage = models.IntegerField()
    engine_displacement = models.IntegerField()
    transmission = models.CharField(max_length=50)
    fuel_type = models.CharField(max_length=50)

    def __str__(self):
        return self.price
    
class Car_Dimensions(models.Model):
    length = models.IntegerField()
    width = models.IntegerField()
    height = models.IntegerField()
    wheelbase = models.IntegerField()
    ground_clearance = models.IntegerField()
    kerb_weight = models.IntegerField()

    def __str__(self):
        return self.length  

class Car_Capacity(models.Model):
    seating_capacity = models.IntegerField()
    fuel_tank_capacity = models.IntegerField()
    bootspace = models.IntegerField()
    
    def __str__(self):
        return self.seating_capacity