#include <iostream>
using namespace std;

int main() {
    int array[3][3] = {{8, 1, 8}, {7, 5, 3}, {2, 9, 4}};

    int St = 0;
    int Ss = 0;
    int D = 0;
    int Dv = 0;
    int key = 2;
    int p[8];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            St += array[i][j];
            Ss += array[j][i];
            if(i == j)
            {
                D += array[i][j];
            }

            if(j == key)
            {
                key--;
                Dv += array[i][j];
            }
            cout << array[i][j];
        }
        p[i] = St;
        p[i + 3] = Ss;
        St = 0;
        Ss = 0;
        cout << endl;
    }

    p[6] = D;
    p[7] = Dv;

    for (int i = 0; i < 8; i++)
    {
        if(p[i] != D)
        {
            cout << "Не магический куб" << endl;
            key = 0;
            break;
        }
    }

    if(key != 0)
    {
        cout << "Магический куб" << endl;
    }
}