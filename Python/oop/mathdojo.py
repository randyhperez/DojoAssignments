class mathDojo(object):
  def __init__(self, total=0):
      self.total = total
  def add(self, *nums):
      for num in nums:
          if type(num) is list or type(num) is tuple:
              for item in num:
                  self.total += item
          else:
              self.total += num
      return self
  def subtract(self, *nums):
      for num in nums:
          if type(num) is list or type(num) is tuple:
            for item in num:
              self.total -= item
          else:
            self.total -= num
      return self
  def result(self):
    print self.total

md = mathDojo()
md.add(2).add([2,3,4],5).subtract([3],2, (1, 1, 1)).result()
