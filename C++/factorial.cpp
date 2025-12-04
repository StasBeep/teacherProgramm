#include <iostream>
using namespace std;

int factorial(int);

int main () {
    int n;

    cout << "Vvedite n factorial: ";
    cin >> n;

    cout << n << "! = " << factorial(n) << endl;
}

int factorial(int a) {
    if(a > 1) {
        return a * factorial(a - 1);
    } else {
        return a;
    }
}