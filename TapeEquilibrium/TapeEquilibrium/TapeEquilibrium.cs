using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TapeEquilibrium
{
    public class TapeEquilibrium
    {
        public static int Solution(int[] A)
        {
            var B = new int[A.Length];
            var sum = 0;
            var min = int.MaxValue;

            for (var i = A.Length - 1; i >= 0; i--)
            {
                sum += A[i];
                B[i] = sum;
            }

            sum = 0;
            for (var j = 0; j < A.Length - 1; j++)
            {
                sum += A[j];
                var diff = Math.Abs(sum - B[j + 1]);
                if (diff < min)
                    min = diff;
            }

            return min;
        }
    }
}
