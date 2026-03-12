#d
n = int(input())
k = int(input())
print(k%n)

#d1
a = int(input())
if a > 0:
    print(1)
elif a < 0:
    print(-1)
else:
    print(0)

#d2
import sys
a = int(input())
i = 1
while(a >=i):
    if(i == a):
        print('YES')
        sys.exit(0)
    else:
        i = i * 2
print("NO")

#d3
n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n - 1):
    if arr[i] < arr[i+1]:
        cnt+=1
print(cnt)

