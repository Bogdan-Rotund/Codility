using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FrogJmp.Test
{
    [TestClass]
    public class FrogJmpTest
    {
        [TestMethod]
        public void Sample()
        {
            // Arrange
            int X = 10;
            int Y = 85;
            int D = 30;

            // Act
            var result = FrogJmp.Solution(X, Y, D);

            // Assert
            Assert.AreEqual(result, 3);
        }

        [TestMethod]
        public void ManyJumps()
        {
            // Arrange
            int X = 500000000;
            int Y = 1000000000;
            int D = 2;

            // Act
            var result = FrogJmp.Solution(X, Y, D);

            // Assert
            Assert.AreEqual(result, 250000000);
        }

        [TestMethod]
        public void SmallJumps()
        {
            // Arrange
            int X = 1;
            int Y = 142730190;
            int D = 1;

            // Act
            var result = FrogJmp.Solution(X, Y, D);

            // Assert
            Assert.AreEqual(result, 142730189);       
        }
    }
}
