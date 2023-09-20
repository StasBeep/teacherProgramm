#include <iostream> // библиотека cin cout
#include <cmath> // библиотека математических операций
using namespace std; // пространство имён std

int main()
{
	// Подключение русского языка
	setlocale(LC_ALL, "Russian");

    int x = -6;
    int c = 5;
    int y = -4;
    int z = 3;

    int h;

    if (y * z > 0 && x > 0) {
        // Предположение
        int minEl = c + y;
        if (minEl < sqrt(x)) {
            minEl = sqrt(x);
        }

        // Предположение
        int maxEl = x + z;

        if (maxEl < y) {
            maxEl = y;
        }

        if (maxEl < minEl) {
            maxEl = minEl;
        }

        h = maxEl;
    }
    else if (y * z < 0 && x > 0) {
        int minEl = sin(x);

        if (minEl > pow(z, 3)) {
            minEl = pow(z, 3);
        }

        h = minEl;
    }
    else {
        h = 1;
    }


    cout << h << endl;
}