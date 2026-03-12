#a2
a = int(input())
b = int(input())

for i in range(a, b+1):
    if i % 2 == 0:
        print(i, end=' ', sep=' ')



#a3

import math
a = int(input())
i = 1
while(a > 0):
    if i  // math.sqrt(i) == math.sqrt(i):
        print(i, end=' ')
    i+=1
    a-=1


#a4
a = int(input())
arr = list(map(int,(input().split())))
ans = []
for i in range(a):
    if i % 2 == 0:
        ans.append(arr[i])

print(ans)


#a5

def min(a , b , c , d):
    if( a < b and a < c and a < d):
        return a
    elif( b < a and b < c and b < d):
        return b
    elif( c < a and c < b and c < d):
        return c
    elif( d < a and d < c and d < b):
        return d
    
print(min(1,2,3,4))
