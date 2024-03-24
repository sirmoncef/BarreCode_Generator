from django.shortcuts import render


def generate(request):
    return render(request,'page/index.html')