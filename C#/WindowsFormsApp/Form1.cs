using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            checkBox1.Checked = true;
        }
        int cl = 0;
        private void button1_Click(object sender, EventArgs e)
        {

            textBox2.Text = Convert.ToString(cl++);
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            double tb1 = Convert.ToDouble(textBox1.Text);

            double tb3 = Convert.ToInt32(tb1);

            textBox3.Text = Convert.ToString(tb3);
        }
    }
}
