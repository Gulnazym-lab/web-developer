#b
a = int(input())
i = 2
while(a > i):
    if a % i == 0:
        print(i)
        break
    else:

        i+=1


#b1
n = int(input())
print(f"The next number for the number {n} is {n+ 1}.")
print(f"The previous number for the number {n} is {n - 1}.")

#b2
y = int(input())
if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):
    print("Yes")
else:
    print("NO")

#b3
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b+ 1):
    if i % d == c:
        print(i, end=' ')

#b4
n = int(input())
arr = list(map(int, input().split()))

for i in arr:
    if i % 2 == 0:
        print(i, end =' ')

#b5
def power(a:int, b:int):
    ans = a
    for i in range(b-1):
        ans *= a
    return ans

print(power(11,2))

