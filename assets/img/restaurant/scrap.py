import os

for i in range(1,21):
    name = 'https://mdbootstrap.com/img/Photos/Horizontal/Food/full%20page/'+ str(i) +'.jpg'
    file_name = str(i) + '_1.jpg'
    command = 'curl ' + name + ' > ' + file_name
    print(command)
    os.system(command)