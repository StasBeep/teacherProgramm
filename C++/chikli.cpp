#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
    double y;

    cout << "Использование цикла for" << endl;

    // C использованием цикла for
    for (double p = 0; p <= 10; p += 0.5)
    {
        y = 0.5 * exp(sin(p)) - p - 1;
        cout << y << endl;
    }

    cout << "--------------------------" << endl << endl;

    cout << "Использование цикла while" << endl;

    // С использованием цикла while
    double x = 0;

    while (x <= 10)
    {
        y = 0.5 * exp(sin(x)) - x - 1;
        x += 0.5;
        cout << y << endl;
    }

    cout << "--------------------------" << endl << endl;

    cout << "Использование цикла do while" << endl;

    // С использованием цикла do while
    x = 0;

    do
    {
        y = 0.5 * exp(sin(x)) - x - 1;
        x += 0.5;
        cout << y << endl;
    } while (x <= 10);

	system("pause");
}