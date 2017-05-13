class animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name:", self.name, "\nHealth:", self.health
class dog(animal):
    def __init__(self, name, health=150):
        super(dog, self).__init__(name)
        self.health = health
    def pet(self):
        self.health += 5
        return self
class dragon(animal):
    def __init__(self,name, health=170):
        super(dragon, self).__init__(name)
        self.type = "dragon"
        self.health = health
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon \nName:", self.name, "\nHealth:", 170
class fish(animal):
  def __init__(self, name):
    super(fish, self).__init__(name)
  def swim(self):
    self.health -=5
    return self

yzera = dragon("yzera")
yzera.walk().walk().walk().run().run().fly().fly().displayHealth()

lab = dog("lab")
lab.displayHealth()

trout = fish("trout")
trout.swim().displayHealth()
