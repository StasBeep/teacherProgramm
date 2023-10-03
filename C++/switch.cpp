#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
    cout << "Введите число: ";
    int operand;
    cin >> operand;

    switch (operand)
    {
    case 5:
        cout << "5 = "  << operand << endl;
        break;
    case 10:
        cout << "10 = " << operand << endl;
        break;
    case -2:
        cout << "-2 = " << operand << endl;
        break;
    case -6:
        cout << "-6 = " << operand << endl;
        break;
    case 0:
        cout << "0 = " << operand << endl;
        break;
    default:
        cout << "Вы ошиблись" << endl;
        break;
    }

	system("pause");
}