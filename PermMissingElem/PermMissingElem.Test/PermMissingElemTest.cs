using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PermMissingElem.Test
{
    [TestClass]
    public class PermMissingElemTest
    {
        [TestMethod]
        public void Sample()
        {
            // Arrange
            int[] A = { 2, 3, 1, 5 };

            // Act
            var result = PermMissingElem.Solution(A);

            // Assert
            Assert.AreEqual(result, 4);
        }

        [TestMethod]
        public void HighNumbers()
        {
            // Arrange
            var range1 = Enumerable.Range(1, 50000);
            var range2 = Enumerable.Range(50002, 50000);
            var A = range1.Concat(range2).ToArray();

            // Act
            var result = PermMissingElem.Solution(A);

            // Asert
            Assert.AreEqual(result, 50001);
        }
    }
}
