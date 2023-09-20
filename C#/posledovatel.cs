using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgrammPosl
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите a = ");
            double a = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("a + 5 = ");
            double b = Math.Sqrt(Math.Pow(a,2)) + 5;

            Console.WriteLine(b);

            string a1 = Convert.ToString(Console.ReadLine());

            Console.WriteLine(a1 + "5");

            Console.ReadLine();
        }
    }
}
