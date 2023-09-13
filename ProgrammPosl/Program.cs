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
            double b = Math.Sqrt(a) + 5;

            Console.WriteLine(b);

            Console.ReadLine();
        }
    }
}
