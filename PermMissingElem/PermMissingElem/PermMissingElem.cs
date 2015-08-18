using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PermMissingElem
{
    public class PermMissingElem
    {
        public static int Solution(int[] A)
        {
            long n = A.Length + 1;
            long sum = (n * (n + 1)) / 2;
            
            for (int i = 0; i < A.Length; i++)
            {
                sum -= A[i];
            }

            return (int)sum;
        }
    }
}
