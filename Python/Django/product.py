class product(object):
    def __init__(self, price, name, weight, brand, cost):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
    def sell(self):
        self.status = "sold"
        return self
    def tax(self, tax):
        self.final_price = (self.price * tax) + self.price
        return self
    def returned(self, reason):
        if reason == "defective":
            self.status = defective
            self.price = 0
        elif reason == "like new":
            self.status = "for sale"
        elif reason == "open box":
            self.status = "for sale"
            self.price = self.pricee - (self.price * 0.20)
        return self
    def displayinfo(self):
        self.tax(0.07)
        print "Item:", self.name
        print "Price:", self.price
        print "Final Price:", self.final_price
        print "Weight:", self.weight
        print "Brand:", self.brand
        print "Cost:", self.cost
        print "Status:", self.status

product1 = product(779.99, "Pixel XL", "0.5lbs", "Google", 600)
product1.displayinfo()
