#c
n = int(input())
k = int(input())
print(k//n)

#c1
a = int(input())
b = int(input())

if(a == 1 and b == 1) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")

#c2
import math
a = int(input())
b = int(input())

for i in range(a, b+ 1):
    if i // math.sqrt(i) == math.sqrt(i):
        print(i, end=' ')

  #c3
a = int(input())
i = 1
while(a > i):
    print(i, end =' ')
    i = i * 2
  #c4
arr = list(map(int, input().split()))

cnt = 0
for i in arr:
    if i > 0:
        cnt += 1
print(cnt)
  
