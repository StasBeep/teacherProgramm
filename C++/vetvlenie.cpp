#include <iostream> // ���������� cin cout
#include <cmath> // ���������� �������������� ��������
using namespace std; // ������������ ��� std

int main()
{
	// ����������� �������� �����
	setlocale(LC_ALL, "Russian");

    int x = -6;
    int c = 5;
    int y = -4;
    int z = 3;

    int h;

    if (y * z > 0 && x > 0) {
        // �������������
        int minEl = c + y;
        if (minEl < sqrt(x)) {
            minEl = sqrt(x);
        }

        // �������������
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