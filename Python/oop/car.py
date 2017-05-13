class car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    def display_all(self):
        print "Price:", self.price
        print "Speed:", self.speed
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax
        return self

car1 = car(2000, "35 mph", "Full", "15mpg")
car2 = car(11000, "150 mph", "Half", "25mpg")
car3 = car(30000, "200 mph", "Full", "20mpg")
car4 = car(2000, "35 mph", "Empty", "15mpg")
car5 = car(18000, "125 mph", "Full", "12mpg")
car6 = car(8000, "100 mph", "Full", "40mpg")
