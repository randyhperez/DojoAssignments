class bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayinfo(self):
        print "Price:", self.price
        print "Max Speed:", self.max_speed
        print "Total Miles", self.miles
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        if self.miles >= 5:
            print "Reversing"
            self.miles -= 5
        elif self.miles == 0:
            print "Go for a ride! You are at 0 miles"
        else:
            print "Reversing"
            self.miles = 0
        return self

new_bike1 = bike(400, "30 mph")
new_bike1.reverse().displayinfo()
new_bike1.ride().ride().ride().reverse().displayinfo()
new_bike1.ride().ride().reverse().reverse().displayinfo()
new_bike1.reverse().reverse().reverse().displayinfo()
