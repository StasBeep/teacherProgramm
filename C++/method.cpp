#include <iostream>
#include <cmath>
using namespace std;

// Прототип функции (ещё его называют заголовком)
// Либо функцию, которая используется в главной функции main() поместить выше,
// то есть на месте прототипа, либо использовать прототип, а функцию ниже описать
double Ploshadi(double);

int main()
{
    // Подключение русского языка
    setlocale(LC_ALL, "Russian");

    // Переменные используемые
    double d1;
    double d2;
    double d3;
    double S1;
    double S2;
    double S3;

    cout << "Введите d1:" << endl;
    cin >> d1;
    S1 = Ploshadi(d1);
    cout << "Площадь 1 круга " << S1 << endl << endl;

    cout << "Введите d2:" << endl;
    cin >> d2;
    S2 = Ploshadi(d2);
    cout << "Площадь 2 круга " << S2 << endl << endl;

    cout << "Введите d3:" << endl;
    cin >> d3;
    S3 = Ploshadi(d3);
    cout << "Площадь 3 круга " << S3 << endl << endl;

    system("pause");
}

/*
* Первое double - это тип возвращаемого значения функции (метода), то что возращается по return
* Второй double - тип параметра передаваемый в функцию
*/
double Ploshadi(double D)
{
    double S = 3.14 * pow(D, 2) / 4;
    return S;
}