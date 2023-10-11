using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Method
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите d1:");
            double d1 = Convert.ToDouble(Console.ReadLine());

            double S1 = Ploshadi(d1);

            Console.WriteLine("Площадь 1 круга " + S1);
            
            Console.WriteLine("Введите d2:");
            double d2 = Convert.ToDouble(Console.ReadLine());

            double S2 = Ploshadi(d2);

            Console.WriteLine("Площадь 2 круга " + S2);

            Console.WriteLine("Введите d3:");
            double d3 = Convert.ToDouble(Console.ReadLine());

            double S3 = Ploshadi(d3);

            Console.WriteLine("Площадь 3 круга " + S3);

            Console.ReadLine();
        }

        static double Ploshadi(double D)
        {
            double S = Math.PI * Math.Pow(D, 2) / 4;

            return S;
        }
    }
}
