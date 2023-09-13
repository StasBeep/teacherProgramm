#include <iostream> // библиотека cin cout
#include <cmath> // библиотека математических операций
using namespace std; // пространство имён std

int main()
{
	// Подключение русского языка
	setlocale(LC_ALL, "Russian");

	double a; // входные данные
	double b; // выходные данные

	cout << "Введитe a\n";
	cin >> a;

	cout << a << endl;

	b = sqrt(a) + 5;

	cout << b << endl

	system("pause");
}