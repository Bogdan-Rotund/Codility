using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TapeEquilibrium.Test
{
    [TestClass]
    public class TapeEquilibriumTest
    {
        [TestMethod]
        public void SampleInput()
        {
            // Arrange
            int[] A = { 3, 1, 2, 4, 3 };

            // Act
            var result = TapeEquilibrium.Solution(A);

            // Assert
            Assert.AreEqual(result, 1);
        }
    }
}
