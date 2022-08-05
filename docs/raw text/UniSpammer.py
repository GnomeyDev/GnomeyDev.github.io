import keyboard
import time

each_line = input("What to spam")
amount = int(input("How many times"))

print("you have 5 seconds to open whatever you want to spam")
time.sleep(5)

for i in range (1, amount):
    keyboard.write(each_line)
    keyboard.press('enter')

print("Done")