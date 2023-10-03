using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            double operand = Convert.ToDouble(Console.ReadLine());

            switch (operand)
            {
                case 5:
                    Console.WriteLine("5 = " + operand);
                    break;
                case 10:
                    Console.WriteLine("10 = " + operand);
                    break;
                case -2:
                    Console.WriteLine("-2 = " + operand);
                    break;
                case -6:
                    Console.WriteLine("-6 = " + operand);
                    break;
                case 0.5:
                    Console.WriteLine("0.5 = " + operand);
                    break;
                default:
                    Console.WriteLine("Вы ошиблись");
                    break;
            }

            // Пауза
            Console.ReadLine();
        }
    }
}
