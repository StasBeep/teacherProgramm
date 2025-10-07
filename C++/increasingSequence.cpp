#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    int counterElement = 0;
    double elementArray = 0;
    double checkElement = 0;
    int counterResultArray = 1;
    int j = 1;

    cout << "Введите размер входящей последовательности: ";
    cin >> counterElement;

    double* array = new double[counterElement];
    
    for(int i = 0; i < counterElement; i++) {
        cout << "Введите элемент " << i + 1 << ": ";
        cin >> elementArray;
        array[i] = elementArray;
    }

    checkElement = array[0];
    for(int i = 1; i < counterElement; i++) {
        if(checkElement < array[i]){
            counterResultArray++;
            checkElement = array[i];
        }
    }

    double* resultArray = new double[counterResultArray];
    checkElement = array[0];
    resultArray[0] = array[0];
    j = 1;

    for(int i = 1; i < counterElement; i++) {
        if(checkElement < array[i]){
            resultArray[j] = array[i];
            j++;
            checkElement = array[i];
        }
    }

    for(int i = 0; i < counterResultArray; i++) {
        cout << resultArray[i] << " ";
    }
    cout << endl;

    // Освобождаем память
    delete[] array;
    delete[] resultArray;
}