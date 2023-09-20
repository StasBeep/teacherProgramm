using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            double x = -6;
            double c = 5;
            double y = -4;
            double z = 3;

            double h;

            if (y * z > 0 && x > 0)
            {
                // Предположение
                double minEl = c + y;
                if (minEl < Math.Sqrt(x))
                {
                    minEl = Math.Sqrt(x);
                }

                // Предположение
                double maxEl = x + z;

                if (maxEl < y)
                {
                    maxEl = y;
                }

                if (maxEl < minEl)
                {
                    maxEl = minEl;
                }

                h = maxEl;
            }
            else if (y * z < 0 && x > 0)
            {
                double minEl = Math.Sqrt(x);

                if (minEl > Math.Pow(z, 3))
                {
                    minEl = Math.Pow(z, 3);
                }

                h = minEl;
            }
            else
            {
                h = 1;
            }


            Console.WriteLine(h);

            // Пауза
            Console.ReadLine();
        }
    }
}
