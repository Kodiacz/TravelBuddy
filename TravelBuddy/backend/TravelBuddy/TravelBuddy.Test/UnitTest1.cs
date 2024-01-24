namespace TravelBuddy.Test
{
	public class UnitTest1
	{
		[Theory]
		[InlineData(1, 0)]
		[InlineData(2, 0)]
		public void Test1(int test, int exptected)
		{
			Assert.True(test > exptected);
		}
		
		[Fact]
		public void Test2()
		{
			Assert.True(1 > 0);
		}


		[Fact]
		public void Test3()
		{
			Assert.True(2 > 0);
		}
	}
}