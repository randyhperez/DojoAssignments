from time import strftime

class call(object):
    def __init__(self, id, name, phone_num, reason, time_of_call = strftime("%m-%d-%Y %H:%M:%S")):
        self.id = id
        self.name = name
        self.phone_num = phone_num
        self.time_of_call = time_of_call
        self.reason = reason
    def displayCall(self):
        print "Id:", self.id, "\nCaller Name:", self.name, "\nCaller Phone Number:", self.phone_num, "\nTime of Call:", self.time_of_call, "\nReason for Call:", self.reason

class callCenter(object):
    def __init__(self, calls = []):
        self.calls = calls
        self.queue_size = len(calls)
    def newCall(self, new_call):
        self.calls.append(new_call)
        self.queue_size = len(self.calls)
        return self
    def endCall(self):
        self.calls.pop(0)
        self.queue_size = len(self.calls)
        return self
    def removeByNumber(self, phone_num):
        counter = 0
        for caller in self.calls:
            if phone_num == caller.phone_num:
                self.calls.remove(caller)
        return self
    def sortCalls(self):
        pass
    def displayCallCenter(self):
        for caller in self.calls:
            print caller
            print "Name:", caller.name, "\nPhone Number:", caller.phone_num, "\n"
        print "Queue Size:", self.queue_size

call1 = call(1, "Richard Hendrix", "123-456-7890", "Trying to make a new internet")
call2 = call(2, "Erlich Bachman", "321-654-0987", "Jin Yang's Octopus app")
call3 = call(3, "Gavin Belsom", "456-987-3210", "Take down Jake Barker")

huli = callCenter()

huli.newCall(call1).newCall(call2).newCall(call3).removeByNumber("456-987-3210").displayCallCenter()
