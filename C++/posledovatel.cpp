#include <iostream> // ���������� cin cout
#include <cmath> // ���������� �������������� ��������
using namespace std; // ������������ ��� std

int main()
{
	// ����������� �������� �����
	setlocale(LC_ALL, "Russian");

	double a; // ������� ������
	double b; // �������� ������

	cout << "������e a\n";
	cin >> a;

	cout << a << endl;

	b = sqrt(a) + 5;

	cout << b << endl

	system("pause");
}