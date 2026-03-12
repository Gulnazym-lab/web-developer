a = int(input())
b = int(input())
c = (a * b) % 109
print(c)

#e1
a = int(input())
b = int(input())
print(1 if a > b else 2)


#e2
n = int(input())
cnt = 0
i=1
while(n >= i):
    i *= 2
    cnt+=1
print(cnt)

#e3
import sys
n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n - 1):
    if (arr[i] >  0 and arr[i+1] > 0) or (arr[i] <  0 and arr[i+1] < 0):
        print("YES")
        sys.exit(0)

print("NO")
