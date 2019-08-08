import sys

try:
    n = int(input())                                    #Recebendo quantidade de casos de teste a serem dados

    arr = [0] * n                                       #Gerando array que armazenará cada input

    for i in range(0, n):                               #Recebendo cada array em loop
        arr[i] = input()

        if len(arr[i]) < 9 or len(arr[i]) > 10000:      #Caso de exeção de tamanho de cada caso
            sys.exit(1)

    for i in range(0, n):
        answer = round(len(arr[i]) * 0.01, 2)           #Gerando saída para cada do array
        print(str(answer).replace('.', ','), end=' '),
exit:
    sys.exit(1)